

    $(document).ready(function(){
        let time = new Date()
        
        $("#like").click(function(){
          let $like= document.getElementById("like")

          /* console.log($like.getAttribute("fill")) */
           
           if($like.getAttribute("fill")=="red") $like.setAttribute("fill","black") 
          else $like.setAttribute("fill","red") 
          
         })
      

 

        $(".image-btn").click(function(){
            for(let i = 1;i<21;i++){
            $(".modal-body").append(
                `
                <div class="comment " >
            <div class="comment-header float-left w-100" >
              <div><b> Person Names ${i}</b></div>
              <div>${time.getDate()+"/"+time.getMonth()+"/"+time.getFullYear()+"   "+time.getHours()+":"+time.getMinutes()+":"+time.getSeconds()}</div>
            </div>
          <div class="comment-body">
          <p>This is content is for test This is content is for test
            This is content is for test This is content is for test
            This is content is for test This is content is for test
            This is content is for test This is content is for test
          </P></div>
        </div><hr>                  `
            )
            }
        })
    })

  