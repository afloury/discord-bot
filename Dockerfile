FROM node:latest
# replace this with your application's default port

#EXPOSE 8888

#RUN curl -sL https://deb.nodesource.com/setup_7.x | sudo bash -

#RUN sudo apt-get install nodejs

RUN mkdir /app
WORKDIR /app

RUN git init
RUN git remote add origin https://github.com/afloury/discord-bot.git
ARG COMMIT
RUN git fetch origin
RUN git reset --hard $COMMIT

RUN mkdir -p /app/{commands,node_modules}
RUN npm install discord.js
RUN npm install discord.js-commando --save



#COPY index.js  /app/
#COPY commands/* /app/commands/
#COPY node_modules/* /app/node_modules/
#COPY package.json /app/

#WORKDIR /app/

ENTRYPOINT node /app/index.js
