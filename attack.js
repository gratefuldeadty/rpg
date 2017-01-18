<script>
    
    
    // Attack animation.
    
    var i = 0;
    
    var attacker_hit = document.getElememtById('attacker_hit');
    var attacker_block = document.getElememntById('attacker_block');
    var attacker_miss = document.getElementById('attacker_miss');
    var attacker_bar = docoument.getElementById('attacker_bar');
    
    var defenfder_hit = document.getElememtById('defender_hit');
    var defender_block = document.getElementById('defender_block');
    var defender_miss = document.getElementById('defender_miss');
    var defender_bar = document.getElementById('defender_bar');
    
    var progress = documnent.getElementById('progress');
    var info = document.getElementById('info');
        

function updateAttack()
{
    attacker.inner.HTML = Math.floor(attackArr[i]['attacker_hp']) + '%';
    defender.inner.HTML = Math.floor(attackArr[i]['defender_hp']) + '%';
    message.innerHTML = attackArr[i]['message'];
    
    attacker_bar.style.width = (251 / 100 * attackArr[i]['attacker_hp']) + 'px';
    defender_bar.style.width = (251 / 100 * attackArr[i]['defender_hp']) + 'px';
    
    switch (resultArray[resultCtr]['type']) {

        case 'attack':
            if (atatckArr[i]['turn'] == 'player') {
                defender_hit.style.display = 'block';
            } else {
                attacker_hit.style.display = 'block';
            }
            break;
            
    }
    
    window.setTimeout('resetAnimation(' + (attackArr[i]['turn'] != ' attacker' ? 1 : 2) + ')', 650);
    i++;
    if (i + 1 >= attackArr.length) {
        window.setTimeout(viewResults, 900);
        return;
    }
    
    window.setTimeout(viewResults, 900);
    
}

function viewResults() {
    
    progress.innetHTML = 'Completed';
    info.style.visibility = 'visible';
}


function resetAnimation(what) {
    
    if (what == 1) {
        attacker_hit.style.display = 'none';
        attacker_block.style.display = 'none';
        attacker_miss.style.display = 'none';
    } else {
        defender_hit.style.display = 'none';
        defender_block.style.display = 'none';
        defender_miss.style.display = 'none';
    }
}

window.onload = updateAtatck;
    
    




// #2

function displayAttack()
{
    for (var i = 0; i < attackArr.length; i++) {
        if (attackArr[i]['damage'] > 0) {
            innerContent = '+'attackArr[i]['damage']'+';
            if (attackArr[i]['hp'] < 0) {
            
                attackArr[i]['hp'] = 0;   
            }
            
            document.getElementById(attackArr[i]['hp']).width = 198 * ((attackArr[i]['hp'] / attackArr[i]['start_hp']));
            document.getElementById(attackArr[i]['hp']).innerHTML = attackArr[i]['hp']+'&nbsp;/&nbsp;'+attackArr[i]['start_hp'];
            
            document.getElementById('attackReport').innerHTNML += '<div class="'+attackArr['turn']+'_combat">'+attackArr[i]['message']+'<br />';

            i++;
        
            if (i < attackArr.length)
                self.setTimeout('displayAttack()', 900);
            else
                self.setTimeout('displayResult()', 900);
    }
}

                    


	combatIndex++;
	if(combatIndex<combatStages)
		self.setTimeout('displayCombat()', combatSpeed);
	else
		self.setTimeout('displayResult()', combatSpeed);
}

function displayResult()
{
	document.getElementById("hp_0").width = 198 * ((currentHP[0]/startHP[0]));
	document.getElementById("current_hp_0").innerHTML=currentHP[0]+"&nbsp;/&nbsp;"+startHP[0];
	document.getElementById("hp_1").width = 198 * ((currentHP[1]/startHP[1]));
	document.getElementById("current_hp_1").innerHTML=currentHP[1]+"&nbsp;/&nbsp;"+startHP[1];
	
	if(winner==-1)
	{
		document.getElementById("side_0").innerHTML='&nbsp;';
		document.getElementById("side_1").innerHTML='&nbsp;';
	}
	else
	{
		document.getElementById("side_"+(1-winner)).innerHTML = '<img src="http://cdn.fallensword.com/combat/defeat.gif">'; // other side
		document.getElementById("side_"+winner).innerHTML = '<img src="http://cdn.fallensword.com/combat/victory.gif">';

	}
	document.getElementById("reportDiv").innerHTML += '<hr class="brown"><font color="#006666"><b>'+report[combatIndex]+'</b>';
	
	if(winner!=-1)
		self.setTimeout('displayGains()', combatSpeed);
}

function displayGains()
{
	var name= new Array;
	name[0]	= 'kick420';
	name[1] = 'GUTGOTT';

	document.getElementById("reportDiv").innerHTML += '<br><br>';
	if(combatType==0)
	{
		// cvp
		if(xpGain>0)
			document.getElementById("reportDiv").innerHTML += '<font color="#009900" size=2><b>You gain '+xpGain+' experience.</b><br>';
		if(xpGain<0)
			document.getElementById("reportDiv").innerHTML += '<font color="#990000" size=2><b>You lost '+(Math.abs(xpGain))+' experience.</b><br>';
		if(goldGain>0)
			document.getElementById("reportDiv").innerHTML += '<font color="#000000" size=2><b>You take '+goldGain+' gold from the creature.</b><br>';
		if(goldGain<0)
			document.getElementById("reportDiv").innerHTML += '<font color="#990000" size=2><b>You lost '+(Math.abs(goldGain))+' gold from the defeat.</b><br>';
		if(guildTaxGain>0)
			document.getElementById("reportDiv").innerHTML += '<font color="#000000" size=2><b>Guild tax deducted '+guildTaxGain+' gold to the guild bank.</b><br>';
		if(levelUp>0)
			document.getElementById("reportDiv").innerHTML += '<font color="#999900" size=2><b>Your level has increased!</b><br>';
		if(levelUp<0)
			document.getElementById("reportDiv").innerHTML += '<font color="#990000" size=2><b>Your level has decreased!</b><br>';
	}
	else if(combatType==1)
	{
		winnerId = winner;
		loserId = 1-winner;
		// pvp
		if(xpGain>0)
			document.getElementById("reportDiv").innerHTML += '<font color="#990000" size=2><b>'+name[loserId]+' lost '+(Math.abs(xpGain))+' experience.</b><br>';
		if(levelUp<0)
			document.getElementById("reportDiv").innerHTML += '<font color="#990000" size=2><b>'+name[loserId]+'\'s level has decreased!</b><br>';
		if(goldGain>0)
			document.getElementById("reportDiv").innerHTML += '<font color="#000000" size=2><b>'+name[loserId]+' lost '+(Math.abs(goldGain))+' gold of which '+name[winnerId]+' stole '+(Math.abs(goldStolen))+' gold</b><br>';
		if(goldGain<0)
			document.getElementById("reportDiv").innerHTML += '<font color="#000000" size=2><b>'+name[winnerId]+' lost '+(Math.abs(goldGain))+' gold of which '+name[loserId]+' snatched '+(Math.abs(goldStolen))+' gold</b> (this was due to an activated Snatch skill.)<br>';
		
		if(pvpRatingChange!=0)
			document.getElementById("reportDiv").innerHTML += '<font color="#009900" size=2><b>'+name[winnerId]+' gained PvP rating of '+pvpRatingChange+'.</b><br>';
		if(prestigeGain>0)
			document.getElementById("reportDiv").innerHTML += '<font color="#000000" size=2><b>'+name[winnerId]+' gained '+(Math.abs(prestigeGain))+' PvP Prestige.</b><br>';
	}
	else if(combatType==2)
	{
		if(xpGain>0)
		{
			document.getElementById("reportDiv").innerHTML += '<font color="#009900" size=2><b>Group Leader ('+groupLeader+') gained '+(Math.ceil(xpGain*0.5))+' xp.</b><br>';
			document.getElementById("reportDiv").innerHTML += '<font color="#009900" size=2><b>All other group members ('+groupMembers+') gained '+(Math.ceil(xpGain*0.1))+' xp.</b><br>';
		}
		
		if(goldGain>0)
			document.getElementById("reportDiv").innerHTML += '<font color="#000000" size=2><b>Guild gained '+(Math.abs(goldGain))+' gold.</b><br>';
	}
	
	if(itemId!=-1)
		document.getElementById("itemDiv").style.display='block';
	//document.getElementById("specialsDiv").style.display='block';
}

self.setTimeout('displayCombat()', 400);
</script>




