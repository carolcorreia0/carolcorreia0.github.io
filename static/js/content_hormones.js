var content_hormones= `

<!--Your modal content goes here-->
<p class="title"> Goodbye Hormones </p>
<p class="content">
    Since one of our goals is also to understand how the cooperation and the social capital circulate and 
    can be altered between social groups, we chose to explore as field of study a Brazilian group called 
    <span style="background-color:rgba(89, 17, 49,0.5); font-size:1.1vw; font-weight:500;">“Goodbye hormones: no-hormonal contraception”.</span>  
    </br></br>
    It is a group formed exclusively by women and focused in to discuss free-hormones options regarding contraception 
    among other subjects. Created in 2015, this group is secret and in order to get in you need to be invited and have 
    your admission approved. Even so, the Facebook group counts already more than 125.000 women. 
    </br></br>
    It consists in a very interesting object of investigation that addresses relevant discussions about the self-appropriation
     of the female body and is moved by ideas such as female sorority and companionship. That is, not only its main theme is actual,
      complex and relevant, but its participants are aligned with the perspective of the collaboration and support as principles. 
    </br></br>
    Its main purpose is to discuss non-hormonal contraception options. More and more women are deciding to stop taking the birth control pill. 
    They don’t have the intention to get pregnant, but are very worried about the possible side effects associated to the drug, such as reduced 
    libido, mood swings, migraine, depression, fluid retention, and, in some cases, venous thrombosis. 
</p> 
    <p class="content"><button class="btn" id="btn"> Next </button></p>

<script>
    document.getElementById('btn').addEventListener('click',function(){
    $("#content").html(content_hormones_next);
    centerDiv.style.left = '0px',
    $('#demo01').click(); 
    });
</script>
`;

