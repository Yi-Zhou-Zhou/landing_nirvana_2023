import base64
import os
import json
import datetime
import dateutil.tz
from pydantic import EmailStr, BaseModel
from jinja2 import Environment, select_autoescape, FileSystemLoader
from exchangelib import Version, Build, OAUTH2, OAuth2Credentials, Configuration, Message, Mailbox, HTMLBody, IMPERSONATION, Account
from icecream import ic

env = Environment(loader=FileSystemLoader(searchpath='templates'), autoescape=select_autoescape(['html', 'xml']))

class Email:
    def __init__(self, user_email: EmailStr, name: str = None, phone: str = None, message: str = None ) -> None:
        self.name = name
        self.sender = f"Test <{base64.b64decode(os.getenv('MY_USER')).decode('utf-8')}>"
        self.email = user_email
        self.phone = phone
        self.message = message
        pass

    def send_email(self, subject, template, d_user):
        # Define the config
        m_user = os.getenv('MY_USER')
        client_id = os.getenv('CLIENT_ID')
        client_secret = os.getenv('CLIENT_SECRET')
        tenant_id = os.getenv('TENANT_ID')
        version = Version(build=Build(15, 0, 12, 34))

        credentials = OAuth2Credentials(
            client_id=client_id, client_secret=client_secret, tenant_id=tenant_id
        )

        config = Configuration(service_endpoint='https://outlook.office365.com/EWS/Exchange.asmx',
                               credentials=credentials, auth_type=OAUTH2, version=version)
        account = Account(d_user, config=config, access_type=IMPERSONATION)

        # Generate the HTML template base on the template name
        template = env.get_template(f'{template}.html')

        # Replace
        html = template.render(
            date=datetime.datetime.now(tz=dateutil.tz.gettz('America/Santiago')).strftime('%d/%m/%Y'),
            name=self.name,
            email=self.email,
            phone=self.phone,
            message=self.message,
            subject=subject)


        m = Message(
            account=account,
            to_recipients=[
                Mailbox(email_address=self.email)
            ]
        )

        m.subject = subject
        m.body = HTMLBody(html)
        m.send()
        account.protocol.close()
    
    def send_contact(self):
        self.send_email('📧Tu código de verificación', 'contact', base64.b64decode(os.getenv('MY_USER')).decode('utf-8'))
    


def handler(event, context):
    ic('Inside handler', event)
    ic(event['body'])
    # send file's url to diagnose
    try:
        Email(user_email=event['email'], name=event['name'], phone=event['phone'], message=event['message']).send_contact()
        return {
        "statusCode": 200,
        "body": json.dumps("Contacted.")
    }
    
    except Exception as e:
        ic(e)
        Email(user_email=os.getenv('MY_USER'), name='', phone='', message=str(e)).send_contact()
        return {
        "statusCode": 400,
        "body": e
    }

   
