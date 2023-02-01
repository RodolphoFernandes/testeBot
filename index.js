// Supports ES6
// import { create, Whatsapp } from '@wppconnect-team/wppconnect';
const wppconnect = require('@wppconnect-team/wppconnect');

wppconnect
  .create()
  .then((client) => start(client))
  .catch((error) => console.log(error));

function start(client) {
  client.onMessage((message) => {
    // if (message.body === 'Hello') {
    console.log(message);

   

    client.sendText(message.from, 'WPPConnect message with buttons', {
      useTemplateButtons: true, // False for legacy
      buttons: [
        // {
        //   url: 'https://wppconnect.io/',
        //   text: 'WPPConnect Site'
        // },
        // {
        //   phoneNumber: '+55 11 22334455',
        //   text: 'Call me'
        // },
        {
          id: 'your custom id 1',
          text: 'Some text'
        },
        {
          id: 'another id 2',
          text: 'Another text'
        }
      ],
      title: 'Title text', // Optional
      footer: 'Footer text' // Optional
   });

   if(message.body === 'Some text'){
      client.sendLocation(message.from, '-23.9800302','-46.226026', 'Minha localização');
   }

    // With buttons
  // client.sendFile(message.from, 'data:text/plain;base64,V1BQQ29ubmVjdA==', {
  //   useTemplateButtons: true, // False for legacy
  //   buttons: [
  //     {
  //       url: 'https://wppconnect.io/',
  //       text: 'WPPConnect Site'
  //     },
  //     {
  //       phoneNumber: '+55 11 22334455',
  //       text: 'Call me'
  //     },
  //     {
  //       id: 'your custom id 1',
  //       text: 'Some text'
  //     },
  //     {
  //       id: 'another id 2',
  //       text: 'Another text'
  //     }
  //   ],
  //   title: 'Title text', // Optional
  //   footer: 'Footer text' // Optional
  // });
      // client
      //   .sendText(message.from, 'Hello, how I may help you?')
      //   .then((result) => {
      //     console.log('Result: ', result); //return object success
      //   })
      //   .catch((erro) => {
      //     console.error('Error when sending: ', erro); //return object error
      //   });
    // }
  });
}