(this["webpackJsonprecipe-app"]=this["webpackJsonprecipe-app"]||[]).push([[0],{24:function(e,t,a){e.exports=a(39)},30:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(22),i=a.n(r),s=a(8),o=a(1),p=a(6),m=a.n(p),l=a(9),u=a(11),f=a(12),v=a(14),h=a(13),d=(a(30),function(e){return n.a.createElement("form",{onSubmit:e.getRecipe,style:{marginBottom:"2rem"}},n.a.createElement("input",{className:"form__input",type:"text",name:"recipeName",placeholder:"Search for keywords"}),n.a.createElement("button",{className:"form__button"},"SEARCH"))}),E=function(e){return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},e.recipes.map((function(e){return n.a.createElement("div",{key:e.id,className:"col-md-4",style:{marginBottom:"2rem"}},n.a.createElement("div",{className:"recipes__box"},n.a.createElement("img",{className:"recipe__box-img",src:"".concat("https://spoonacular.com/recipeImages/").concat(e.id,"-556x370.jpg"),alt:e.title}),n.a.createElement("div",{className:"recipe__text",style:{margin:"1rem"}},n.a.createElement("h5",null,e.title.length<20?"".concat(e.title):"".concat(e.title.substring(0,25),"..."))),n.a.createElement("button",{className:"recipe_buttons"},n.a.createElement(s.b,{to:{pathname:"/recipe/".concat(e.id),state:{recipe:e.id}}},"View Recipe"))))}))))};a(20).config();var b="b808aac38d1f43e28f1106714813a023",g=function(e){Object(v.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(u.a)(this,a);for(var c=arguments.length,n=new Array(c),r=0;r<c;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={recipes:[],trivia:""},e.getRandomRecipe=Object(l.a)(m.a.mark((function t(){var a,c;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.spoonacular.com/recipes/search?apiKey=".concat(b,"&number=9"));case 2:return a=t.sent,t.next=5,a.json();case 5:c=t.sent,e.setState({recipes:c.results});case 7:case"end":return t.stop()}}),t)}))),e.getRecipe=function(){var t=Object(l.a)(m.a.mark((function t(a){var c,n,r;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a.target.elements.recipeName.value,a.preventDefault(),t.next=4,fetch("https://api.spoonacular.com/recipes/search?query=".concat(c,"&apiKey=").concat(b,"&number=9"));case 4:return n=t.sent,t.next=7,n.json();case 7:r=t.sent,e.setState({recipes:r.results});case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.getTrivia=Object(l.a)(m.a.mark((function t(){var a,c;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.spoonacular.com/food/trivia/random?apiKey=".concat(b));case 2:return a=t.sent,t.next=5,a.json();case 5:c=t.sent,e.setState({trivia:c.text});case 7:case"end":return t.stop()}}),t)}))),e.componentDidMount=function(){e.getRandomRecipe(),e.getTrivia()},e}return Object(f.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"App-header"},n.a.createElement("h1",{className:"App-title"},"Recipe World")),n.a.createElement(d,{getRecipe:this.getRecipe}),n.a.createElement("p",{className:"trivia_head"},n.a.createElement("u",null,"DID YOU KNOW")),n.a.createElement("p",{className:"trivia_text"},'"',this.state.trivia,'"'),n.a.createElement(E,{recipes:this.state.recipes}))}}]),a}(n.a.Component);a(20).config();var N=function(e){Object(v.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(u.a)(this,a);for(var c=arguments.length,n=new Array(c),r=0;r<c;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={activeRecipe:[]},e.componentDidMount=Object(l.a)(m.a.mark((function t(){var a,c,n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.props.location.state.recipe,t.next=3,fetch("https://api.spoonacular.com/recipes/".concat(a,"/information?apiKey=").concat("b808aac38d1f43e28f1106714813a023"));case 3:return c=t.sent,t.next=6,c.json();case 6:n=t.sent,e.setState({activeRecipe:n});case 8:case"end":return t.stop()}}),t)}))),e}return Object(f.a)(a,[{key:"render",value:function(){var e=this.state.activeRecipe;return n.a.createElement("div",{className:"container"},0!==e.length&&n.a.createElement("div",{className:"active-recipe"},n.a.createElement("img",{className:"active-recipe__img",src:e.image,alt:"Recipe"}),n.a.createElement("h3",{className:"active-recipe__title"},e.title),n.a.createElement("p",{className:"active-recipe__website"},"SOURCE: ",n.a.createElement("a",{href:e.sourceUrl},e.sourceName)),n.a.createElement("button",{className:"active-recipe__button"},n.a.createElement(s.b,{to:"/"},"GO HOME")),n.a.createElement("p",{className:"active-recipe__summary",dangerouslySetInnerHTML:{__html:e.summary}})))}}]),a}(n.a.Component),_=function(){return n.a.createElement(s.a,{basename:"/recipe-app"},n.a.createElement(o.c,null,n.a.createElement(o.a,{path:"/",component:g,exact:!0}),n.a.createElement(o.a,{path:"/recipe/:id",component:N})))};a(38);i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(_,null)),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.28f4816f.chunk.js.map