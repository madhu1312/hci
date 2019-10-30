<template>
<div id="quiz">
    <h2 v-if="!quizStarted">Click Start to take a Quiz About Your City</h2>
        <button @click="startQuiz()" v-if="!quizStarted">START!!</button>
        <div v-for = "(question, index) in info.questions" :key=question>
        <div v-show="index === questionIndex">
        <h2>{{question.text}}</h2>
        <div v-for="response in question.responses" :key=response>
            <ol>
            <!-- <li v-for="response in question.responses" :key=response> -->
                <label>
                    <input type="radio"
                    v-bind:value="response.correct" 
                    v-bind:name="index"
                    v-model="userResponses[index]"
                    style="vertical-align: baseline;"
                    > {{response.text}}
                </label>
            </ol>
            <!-- </li> -->
            </div>
      <button v-if="questionIndex > 0" v-on:click="previous">
        prev
      </button>
      <button v-on:click="next">
        next
      </button>
        <div v-show="questionIndex === info.questions.length">
            <h2>Quiz finished</h2>
        </div>                   
        <!-- </ol> -->
    </div>
    </div>

</div>
<!-- </div> -->
<!-- </div> -->
</template> -->

<script lang="babel">
import json from '../../../data/quiz.json'
export default {
    data() {
        return {
            info : {},
            data : json,
            questionIndex: 0,
            quizStarted: false,
            userResponses: [],
            checked: ''
        }
    },
    methods: {
        next: function() {
            this.questionIndex++
        },
        previous: function() {
            this.questionIndex--
        },        
        getCategoryQuestion(name){
            this.info = this.data.category[`${name}`]
            this.quizStarted= true
        },
        getCategory() {
            this.info = this.data.category
            this.quizStarted = true
        },
        startQuiz() {
            this.getCategory()
        },
        score() {
            return this.userResponses.filter(function(val) {return val}).length
        },
    }
}
</script>
<style>
#category {
    display: inline-block;
    width: 100px;
    height: 50px;
    text-align: left;
    margin-left:80px;
    margin-right:60px;
    margin-bottom:10px;
}
.submitButton {
    display: inline-block;
    padding: 1px 10px;
    background-color: white;
    color: black;
    transition-duration: 0.3s;
    border: 2px solid #ed6745;
    border-radius: 8px;
    float: right;
    position: relative; 
    top: 5px; right: 10px;
}
</style>