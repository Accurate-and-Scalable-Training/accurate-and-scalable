FROM python:3.9

WORKDIR /app

RUN apt-get -y update
RUN apt-get -y install git

RUN pip install uvicorn

RUN cd /app && \
git clone https://github.com/abersheeran/rpc.py && \
cd rpc.py && \
git checkout 3d5c31916a597f8bdd3260c50d6ec398da1c421c && \
rm poetry.lock && \
rm pyproject.toml && \
wget https://raw.githubusercontent.com/abersheeran/rpc.py/d03fc1cab41327504ba0d39fd61e13838b7fd22a/setup.py && \
python3 setup.py install

CMD ["python3","/app/rpc.py/examples/sync_server.py"]