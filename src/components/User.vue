<template>
  <div class="user">
    <h1>User App</h1>
    <form v-on:submit="addUser">
    	<input class="list-class" type="text" v-model="newUser.name" placeholder="Your name here..." />
    	<input class="list-class" type="text" v-model="newUser.email" placeholder="Your email here..." />
    	<input class="list-class-btn" type="submit" value="Submit" />
    </form>
    <ul>
    	<li v-for="user in users">
    		<input id="space-left" type="checkbox" class="toggle" v-model="user.contacted" />
    		<span id="space-left" :class="{contacted: user.contacted}">
    			{{user.name}}: {{user.email}} <button id="space-left" v-on:click="deleteUser(user)">x</button>
    		</span>
    	</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'User',

  data () {
    return {
      newUser: {},
      users: []
    }
  },

  methods: {
  	addUser(e) {
  		this.users.push({
  			name: this.newUser.name,
  			email: this.newUser.email,
  			contacted: false
  		});
  		this.newUser = {};
  		e.preventDefault();
  	},
  	deleteUser(user) {
  		this.users.splice(this.users.indexOf(user), 1);
  	}
  },

  created() {
  	this.$http.get('https://jsonplaceholder.typicode.com/users')
  		.then(function(response) {
  			this.users = response.data;
  		});
  }
}
</script>

<style scoped>
	@import url('https://fonts.googleapis.com/css?family=Roboto');

	.contacted {
		text-decoration: line-through;
	}

	.user {
		width: 80%;
		padding-bottom: 15px;
		display: flex;
		margin: 50px;
		margin-left: 10%;
    	border: 1px solid #ccc;
    	font-family: 'Roboto', sans-serif;
    	box-shadow: 0 1px 5px rgba(0, 0, 0, 0.4), 0 1px 5px rgba(130, 130, 130, 0.35);
	    flex-direction: column;
	    align-items: center;
	    justify-content: center;
	}

	ul {
		list-style-type: none;
		width: 95%;
	    display: flex;
	    flex-direction: column;
	}

	li {
		display: flex;
		margin: 7px 0px;
	}

	form {
		display: flex;
		width: 95%;
	}

	#space-left {
		margin-left: 10px;
		cursor: pointer;
	}

	.list-class {
		display: flex;
	    flex: 1;
	    margin: 10px;
	    height: 24px;
    	padding-left: 5px;
	}

	.list-class-btn {
	    margin: 10px;
	    height: 24px;
    	padding-left: 5px;
	}
</style>
