var Discordie = require('discordie');

const Events = Discordie.Events;
const client = new Discordie();

client.connect({
  token: 'MzEzODMyNjQzNjIyMDc2NDI3.C_vZpw.3S8k79OKrLS5RIjjjKP3AgHd1Bc'
});

client.Dispatcher.on(Events.GATEWAY_READY, e => {
  console.log('Conntected as : ' + client.User.Username);
});

client.Dispatcher.on(Events.MESSAGE_CREATE, e => {
  if(e.message.content == 'PING') {
    e.message.channel.sendMessage('PONG');
  }
});