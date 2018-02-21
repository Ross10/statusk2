import * as firebase from 'firebase';


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBwmr01OVYAofg5MyrBO67aiJmt8AwxVEs",
    authDomain: "statusk-dff10.firebaseapp.com",
    databaseURL: "https://statusk-dff10.firebaseio.com",
    projectId: "statusk-dff10",
    storageBucket: "statusk-dff10.appspot.com",
    messagingSenderId: "1029751346325"
  };

  firebase.initializeApp(config);

//   const database = firebase.database();


//   //Just the removed one!
//   database.ref('notes').on('child_removed',(snapshot) => {
//     console.log(snapshot.key,snapshot.val());
//   });

//    //Just the changed one!
//    database.ref('notes').on('child_changed',(snapshot) => {
//     console.log(snapshot.key,snapshot.val());
//   });

//    //Just the added one!
//    database.ref('notes').on('child_added',(snapshot) => {
//     console.log(snapshot.key,snapshot.val());
//   });



//   // fetch through the childs every time something changes.
//   database.ref('notes').on('value',(snapshot)=>{

 
//       const notes = [];
//       snapshot.forEach((childSnapshot) => {
//         notes.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//       }); 
//       console.log(notes);
//   });

// fetch through the childs.
//   database.ref('notes')
//   .once('value')
//   .then((snapshot) => {
//       const notes = [];
//       snapshot.forEach((childSnapshot) => {
//         notes.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//       }); 
//       console.log(notes);
//   });




  //With Push - We can upload the attributes under new FB ID.

// database.ref('notes').push({
//     title: 'TODO',
//     body:' HI'

// });

// database.ref('notes').push({
//     title: 'TODOOOO',
//     body:' HIIII'

// });

//Here I can update specific item -  inside FB.
// database.ref('notes/-L3YO7pdN9MEm495W7qo').update({
//     title: 'TODOOOO',
//     body:' Heyeyeyey'

// });






//   //Fetching Data from FB : 
//   database.ref().once('value').then((snapshot)=>{
//        const val = snapshot.val();
//        console.log(val.age);
//         })
//        .catch((e)=>{console.log(e);});


  //UPDATE AND REMOVE : 

//   database.ref().set({
//       name: 'Itai Russo',
//       age: 29,
//       isSingle: false,
//       location: {
//           city: 'Maalle Adumim',
//           country:'Israel'
//       }
//   }).then(()=> {
//     console.log('data saved');
//   }).catch((error)=> {
//     console.log('This is failed', error);
//   });

// //   database.ref().set('This is my data');

// // 
// //update Bulk of attributes - Its not good with nested object. If we will try to update location -> city -> We will delete the Country - The solution - is to write 'location/city'.
// database.ref().update({
//     name: 'Mike',
//     age: 30,
//     job: 'Software Developer',
//     'location/city' : 'Boston'

// });


