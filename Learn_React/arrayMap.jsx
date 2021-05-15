
function App() {
 const arr=[
   {id:1,name:"anchal",subject:"history"},
   {id:2,name:"alice",subject:"optional"},
   {id:3,name:"reyon",subject:"os"},
   {id:4,name:"deeksha",subject:"database"}
 ];
 console.log(arr);
 const newAr=arr.map(function(val){
  return `${val.name} ${val.subject} `;
 });
 console.log(newAr[0]);
  return (
<h1>{newAr}</h1>
  );
}

export default App;
