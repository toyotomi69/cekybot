const tmi = require('tmi.js'),
    { channel, username, password } = require('./settings.json');

const options = {
    options: { debug: true },
    connection: {
        reconnect: true,
        secure: true
    },
    identity : {
        username,
        password
    },
    channels: [channel]
};

const client = new tmi.Client(options);
client.connect().catch(console.error);

client.on('connected', () => {
    client.say(channel, `${username} nojo zmrde už jsem tady!`);
});

client.on('message', (channel, user, message, self) => {
    if(self) return;

    if(message == '@cekybot ahoj') {
        client.say(channel, `@${user.username}, čau! zaludKamo`);
    }
    if(message == 'zaludE') {
        client.say(channel, `@${user.username} zaludE`);
    }
    if(message == '!zaludcommands') {
        client.say(channel, `!zalud, !hodnoceni, !madmong, !gn :)`);
    }
    if (message ==  '!zalud') {
        const num = rollDice();
        client.say(channel, `@${user.username} Toto tvrzení je na  ${num}% správné zaludE`);
        
      } 
      if (message ==  '!hodnoceni') {
        const num = hraxd();
        client.say(channel, `Tato hra je ${num}/10 zalud5Head`);
        
      } 
      if (message ==  '!madmong') {
        client.say(channel, `zaludE Čau frajeři, tady Žalud 🌰, dneska jsem v lese 🌳🌳, a jsem teda zase zpátky, tentokrát s Madmongama FeelsAmazingMan 💊 madmonq.gg/agraelus`);
        
      } 
      if (message ==  '!gn') {
        client.say(channel, `@${user.username} zaludBedge 🌙 dobrou noc`);
        
      } 
    function rollDice () {
        const sides = 100;
        return Math.floor(Math.random() * sides) + 1;
      }
      function hraxd () {
        const sides = 10;
        return Math.floor(Math.random() * sides) + 1;
      }
    
});