import"./assets/styles-7b39f945.js";import{a as s,S as a}from"./assets/vendor-baebd336.js";s.defaults.baseURL="https://food-boutique.b.goit.study/api";const l=async()=>{const{data:e}=await s.get("/products/categories");return e},t={selectEl:document.querySelector("filterts-categories-select")};l().then(e=>{r(e)}).catch(e=>console.log(e));function r(e){const c='<option disabled selected value="Show All" hidden data-placeholder="true">Categories</option>';t.selectEl.insertAdjacentHTML("afterbegin",c);const n=e.map(o=>`<option value="${o}">${o.replaceAll("_"," ")}</option>`).join("").concat('<option value="">Show All</option>');t.selectEl.insertAdjacentHTML("afterbegin",n),new a({select:t.selectEl,settings:{showSearch:!1,searchHighlight:!0}})}
//# sourceMappingURL=commonHelpers2.js.map
