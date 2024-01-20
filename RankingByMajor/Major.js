const according=document.getElementsByClassName('contentbx');
for(i=0;i<according.length;i++)
{
    according[i].addEventListener('click',function(){


        this.classList.toggle('active')
    })
}