let formbutton = document.querySelector('#formId');
let formsend = document.querySelector('#sendData');
let formOne = document.querySelector('#formOne');
let formTwo = document.querySelector('#formTwo');
function performFirstRequest(){
	let resultContainer = document.querySelector("#containerOne");
	resultContainer.innerHTML ='';


	axios.get('https://jsonplaceholder.typicode.com/posts')
	.then(function(response){
		resultContainer.innerHTML ='<pre>'+JSON.stringify(response.data, null,'\t')+'</pre>';
	})
	.catch(function (error){

	})
}



function performSecondRequest(){
	let resultContainer = document.querySelector("#containertwo");
	let todo = document.querySelector('input').value;
	resultContainer.innerHTML ='';




	axios.get('https://jsonplaceholder.typicode.com/posts', {params: {id: todo}})
	.then(function(response){
		resultContainer.innerHTML ='<pre>'+JSON.stringify(response.data, null,'\t')+'</pre>';
	})
	.catch(function (error){

	})
}

function sendMyData(){
	let resultContainer = document.querySelector("#containerThree");
	let todotitle = document.querySelector('#title').value;
	resultContainer.innerHTML ='';




	axios.post('https://jsonplaceholder.typicode.com/posts', {
		userId: '1',
		title: todotitle,
		body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem culpa ratione, nemo voluptate, dolore sit ducimus blanditiis commodi cupiditate iure animi repudiandae necessitatibus quia est, facere fugit porro natus delectus odio beatae perspiciatis aliquid, molestiae? Deserunt fugiat cupiditate nesciunt quis nisi, soluta fugit voluptas neque doloremque possimus amet vel eos.'
	})
	.then(function(response){
		resultContainer.innerHTML ='<pre>'+JSON.stringify(response.headers, null,'\t')+'</pre>';
		resultContainer.innerHTML +='<pre>'+JSON.stringify(response.data, null,'\t')+'</pre>';
	})
	.catch(function (error){
		resultContainer.innerHTML +='<pre>'+JSON.stringify(response.status, null,'\t')+'</pre>';
	})
}

formOne.addEventListener('submit',function(e){
e.preventDefault();
});

formTwo.addEventListener('submit',function(e){
e.preventDefault();
});

formbutton.addEventListener('click',function(e){
	e.preventDefault();
})

formsend.addEventListener('click',function(e){
	e.preventDefault();
})