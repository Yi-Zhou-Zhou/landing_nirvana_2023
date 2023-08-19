ARG FUNCTION_DIR="/function"

FROM python:3.9-slim-buster as build-image 

#Clean up apt-get cache
RUN rm -rf /var/lib/apt/lists/*

# Include global arg in this stage of the build
ARG FUNCTION_DIR
# Create function directory
RUN mkdir -p ${FUNCTION_DIR}

# Copy function folder
COPY requirements.txt ${FUNCTION_DIR}

RUN pip install -r ${FUNCTION_DIR}/requirements.txt
RUN pip install python-dateutil
RUN apt-get -y update

ENV MY_USER=ZGV2QGRldi1teWZ1dHVyZS5jb20=
ENV MY_PASS=WnVkNzAwNTA=eThpODUqNWxsSzYk
ENV CLIENT_ID=8bccd62b-9a74-40fe-993c-b9fadf28347f
ENV CLIENT_SECRET=MYi8Q~tMykHmUNGA79QiWfflDt6PNbndH2QCdbiL
ENV TENANT_ID=d815bb48-cce8-4a79-871e-377e7e8b95b9

COPY . ${FUNCTION_DIR}

# Install the runtime interface client
RUN pip install \
  --target ${FUNCTION_DIR} \
  awslambdaric

# Set working directory to function root directory
WORKDIR ${FUNCTION_DIR}

ENTRYPOINT [ "/usr/local/bin/python", "-m", "awslambdaric" ]
CMD [ "main.handler" ]