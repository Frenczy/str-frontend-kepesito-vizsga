function changeOuterLinks() {

    document.querySelectorAll("nav[id='link-list'] a").forEach(item=> {
        if (item.innerHTML.includes('outer-link')){
            item.innerHTML=`<strong>${item.innerHTML}</strong>`;
            item.setAttribute('target', '_blank')
        }
    })

    const navItem=document.querySelector("nav");
        navItem.style.display="flex";
        navItem.style.flexDirection="column";
        navItem.style.width='30%';
        navItem.style.margin='0px auto';
        navItem.style.border='1px solid blue';
        navItem.style.padding='16px'
}


export { changeOuterLinks };