import"./assets/styles-85a8419c.js";import{a as s}from"./assets/vendor-f144e563.js";const e=async()=>{console.log("Hello World");const o=await s.get("https://jsonplaceholder.typicode.com/posts?_limit=2&_page=50");return console.log("Posts: ",o.data),o};console.log("prepear run ");e().then(o=>console.log("after axios",o)).catch(o=>colsole.error(o));
//# sourceMappingURL=commonHelpers2.js.map
