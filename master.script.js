"use strict";

$(document).ready(function(){
	var csrf_token = $("input#csrf-token").val();
	$.ajaxSetup({ 
	    data: {
	        hash: ((csrf_token != undefined) ? csrf_token : 0)
	    },
	    cache: false,
	    timeout:(1000 * 360)
	});

	$.fn.reloadPage = function(_time = 0) {
		setTimeout(function(){
			this.location.reload();
		},_time);
	}

	$.fn.replaceClass = function(class1,class2) {  
		$(this).removeClass(class1);
		$(this).addClass(class2);
		return this;
	};

	if ($("div#main-preloader-holder").length) {
		$("div#main-preloader-holder").fadeOut(1500,function(){
			$(this).remove();
		});
	}

	$(document).on('hidden.bs.modal','div[data-onclose="remove"]', function () {  
        $(this).remove();
    });

    $.fn.scroll2inner = function(elem, speed) { 
	    $(this).animate({
	        scrollTop:  ($(this).scrollTop() - $(this).offset().top + $(elem).offset().top - 50)
	    }, speed == undefined ? 1000 : speed); 
	    return this; 
	};

	$.fn.scroll2 = function (speed = 500,top_offset = 50) {
		if (typeof(speed) === 'undefined')
			speed = 500;

		$('html, body').animate({
			scrollTop: ($(this).offset().top - top_offset)
		}, speed);

		return $(this);
	};

	$(document).on('show.bs.modal', 'div.modal', function() {
	    $('body').find('div.modal.show').not($(this)).each(function(index, el) {
	    	$(this).addClass('d-none');
	    });

	    $('body').find('div.modal-backdrop.show').each(function(index, el) {
	    	$(this).addClass('d-none');
	    });
	});

	$(document).on('hide.bs.modal', 'div.modal', function() {
	    $('body').find('div.modal.show.d-none').not($(this)).each(function(index, el) {
	    	$(this).removeClass('d-none');
	    });

	    $('body').find('div.modal-backdrop.show.d-none').each(function(index, el) {
	    	$(this).removeClass('d-none');
	    });
	});

	$(document).on('click', '[data-anchor]', function(event) {
		event.preventDefault();

		var link = $(this).data('anchor');

		SMColibri.spa_load(link);
	});

	$(document).on('click.bs.dropdown.data-api', 'div.vue-dropdown-multiselect', function (e) {
		e.stopPropagation();
	});
});

window.mobileCheck = function() {
	let check = false;
	(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
	return check;
};

function cl_load_media(e = false) {
	if (e) {
		var n = $(e).parents('[data-lozad-media="loading"]');
		n.attr('data-lozad-media', 'loaded');
		n.find('[data-lozad-preloader="icon"]').remove();
	}
}

function now_uts() {
	return $.now() / 1000 | 0;
}


function cl_redirect(url = "/", blank = false) {

	if (blank == true) {
		window.open(url, '_blank');
	}
	else {
		document.location.href = url;
	}
	
	return;
}

function cl_empty(value = '') {
	if (value === '' || value === null || value === undefined || value == 0) {
        return true
    }
    else {
        return false
    }
}

function cl_uname_valid(uname = null) {
	if (cl_empty(uname)) {
		return false;
	} 

	else {
		return /^[a-zA-Z0-9_]{3,25}$/.test(uname);
	}

	return false;
}

String.prototype.format = function () {
    var a = this;
    for (var k in arguments) {
        a = a.replace(new RegExp("\\{" + k + "\\}", 'g'), arguments[k]);
    }
    return a
}

Array.prototype.contains = function(obj) {
	
    var i = this.length;
    while (i--) {
        if (this[i] === obj) {
            return true;
        }
    }

    return false;
}

Array.prototype.rmItem = function(item) {
	
    for(var i = 0; i < this.length; i++){ 
    	if (this[i] === item) { 
    		this.splice(i, 1); break;
    	}
    }

    return this;
}

Array.prototype.getItem = function(item) {
    return this[item];
}

Array.prototype.hasIndex = function(item) {
    for (var i = 0; i < this.length; i++) {
    	if (item === i) {
    		return true;
    	}
    }

    return false;
}

String.prototype.insert_at = function(index, string) {   
  return this.substr(0, index) + string + this.substr(index);
}

var delay = (function(){
	var timer = 0;
	return function(callback, ms){
		clearTimeout (timer);
		timer = setTimeout(callback, ms);
	};
})();

function log(val = null) {
	console.log(val);
}

function cl_bs_notify(msg = "", time = 1000) {
	if (cl_empty(msg)) {
		return false;
	}

	else {
		$("body").find('div.main-modalnotif-container').each(function(index, el) {
			$(el).remove();
		}).promise().done(function() {
			$("body").append($("<div>",{
				class: "main-modalnotif-container",
				html: $("<span>", {
					text: msg,
                    class: "animated fadeInUp"
				})
			}));

			setTimeout(function() {
				$("body").find('div.main-modalnotif-container').each(function(index, el) {
					$(el).addClass('animated fadeOutDown');
				});
			}, time);
		});
	}
}

function cl_parse_url_parms(text) {

	let values = text.split(/\&/);
	let data   = {};
	let val    = null;

	for (var i = 0; i < values.length; i++) {

		val = values[i].split(':');
		
		data[val[0]] = val[1];
	}

	return data;
}

function cl_randint(min = 0, max = 0) {
    min = Math.ceil(min);
    max = Math.floor(max);
    
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function cl_get_ulang() {
	var lang       = window.navigator.languages ? window.navigator.languages[0] : null;
    var lang       = lang || window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage;
	var short_lang = lang;

	if (short_lang.indexOf('-') !== -1) {
		short_lang = short_lang.split('-')[0];
	}

	else if (short_lang.indexOf('_') !== -1) {
		short_lang = short_lang.split('_')[0];
	}

	return short_lang;
}


window.cl_emoticons = Object({
    people: {
        smile: "ðŸ˜„",
        smiley: "ðŸ˜ƒ",
        grinning: "ðŸ˜€",
        blush: "ðŸ˜Š",
        wink: "ðŸ˜‰",
        heart_eyes: "ðŸ˜",
        kissing_heart: "ðŸ˜˜",
        kissing_closed_eyes: "ðŸ˜š",
        kissing: "ðŸ˜—",
        kissing_smiling_eyes: "ðŸ˜™",
        stuck_out_tongue_winking_eye: "ðŸ˜œ",
        stuck_out_tongue_closed_eyes: "ðŸ˜",
        stuck_out_tongue: "ðŸ˜›",
        flushed: "ðŸ˜³",
        grin: "ðŸ˜",
        pensive: "ðŸ˜”",
        relieved: "ðŸ˜Œ",
        unamused: "ðŸ˜’",
        disappointed: "ðŸ˜ž",
        persevere: "ðŸ˜£",
        cry: "ðŸ˜¢",
        joy: "ðŸ˜‚",
        sob: "ðŸ˜­",
        sleepy: "ðŸ˜ª",
        disappointed_relieved: "ðŸ˜¥",
        cold_sweat: "ðŸ˜°",
        sweat_smile: "ðŸ˜…",
        sweat: "ðŸ˜“",
        weary: "ðŸ˜©",
        tired_face: "ðŸ˜«",
        fearful: "ðŸ˜¨",
        scream: "ðŸ˜±",
        angry: "ðŸ˜ ",
        rage: "ðŸ˜¡",
        triumph: "ðŸ˜¤",
        confounded: "ðŸ˜–",
        laughing: "ðŸ˜†",
        yum: "ðŸ˜‹",
        mask: "ðŸ˜·",
        sunglasses: "ðŸ˜Ž",
        sleeping: "ðŸ˜´",
        dizzy_face: "ðŸ˜µ",
        astonished: "ðŸ˜²",
        worried: "ðŸ˜Ÿ",
        frowning: "ðŸ˜¦",
        anguished: "ðŸ˜§",
        imp: "ðŸ‘¿",
        open_mouth: "ðŸ˜®",
        grimacing: "ðŸ˜¬",
        neutral_face: "ðŸ˜",
        confused: "ðŸ˜•",
        hushed: "ðŸ˜¯",
        smirk: "ðŸ˜",
        expressionless: "ðŸ˜‘",
        man_with_gua_pi_mao: "ðŸ‘²",
        man_with_turban: "ðŸ‘³",
        cop: "ðŸ‘®",
        construction_worker: "ðŸ‘·",
        guardsman: "ðŸ’‚",
        baby: "ðŸ‘¶",
        boy: "ðŸ‘¦",
        girl: "ðŸ‘§",
        man: "ðŸ‘¨",
        woman: "ðŸ‘©",
        older_man: "ðŸ‘´",
        older_woman: "ðŸ‘µ",
        person_with_blond_hair: "ðŸ‘±",
        angel: "ðŸ‘¼",
        princess: "ðŸ‘¸",
        smiley_cat: "ðŸ˜º",
        smile_cat: "ðŸ˜¸",
        heart_eyes_cat: "ðŸ˜»",
        kissing_cat: "ðŸ˜½",
        smirk_cat: "ðŸ˜¼",
        scream_cat: "ðŸ™€",
        crying_cat_face: "ðŸ˜¿",
        joy_cat: "ðŸ˜¹",
        pouting_cat: "ðŸ˜¾",
        japanese_ogre: "ðŸ‘¹",
        japanese_goblin: "ðŸ‘º",
        see_no_evil: "ðŸ™ˆ",
        hear_no_evil: "ðŸ™‰",
        speak_no_evil: "ðŸ™Š",
        skull: "ðŸ’€",
        alien: "ðŸ‘½",
        hankey: "ðŸ’©",
        fire: "ðŸ”¥",
        sparkles: "âœ¨",
        star2: "ðŸŒŸ",
        dizzy: "ðŸ’«",
        boom: "ðŸ’¥",
        anger: "ðŸ’¢",
        sweat_drops: "ðŸ’¦",
        droplet: "ðŸ’§",
        zzz: "ðŸ’¤",
        dash: "ðŸ’¨",
        ear: "ðŸ‘‚",
        eyes: "ðŸ‘€",
        nose: "ðŸ‘ƒ",
        tongue: "ðŸ‘…",
        lips: "ðŸ‘„",
        thumbs_up: "ðŸ‘",
        "-1": "ðŸ‘Ž",
        ok_hand: "ðŸ‘Œ",
        facepunch: "ðŸ‘Š",
        fist: "âœŠ",
        wave: "ðŸ‘‹",
        hand: "âœ‹",
        open_hands: "ðŸ‘",
        point_up_2: "ðŸ‘†",
        point_down: "ðŸ‘‡",
        point_right: "ðŸ‘‰",
        point_left: "ðŸ‘ˆ",
        raised_hands: "ðŸ™Œ",
        pray: "ðŸ™",
        clap: "ðŸ‘",
        muscle: "ðŸ’ª",
        walking: "ðŸš¶",
        runner: "ðŸƒ",
        dancer: "ðŸ’ƒ",
        couple: "ðŸ‘«",
        family: "ðŸ‘ª",
        couplekiss: "ðŸ’",
        couple_with_heart: "ðŸ’‘",
        dancers: "ðŸ‘¯",
        ok_woman: "ðŸ™†",
        no_good: "ðŸ™…",
        information_desk_person: "ðŸ’",
        raising_hand: "ðŸ™‹",
        massage: "ðŸ’†",
        haircut: "ðŸ’‡",
        nail_care: "ðŸ’…",
        bride_with_veil: "ðŸ‘°",
        person_with_pouting_face: "ðŸ™Ž",
        person_frowning: "ðŸ™",
        bow: "ðŸ™‡",
        tophat: "ðŸŽ©",
        crown: "ðŸ‘‘",
        womans_hat: "ðŸ‘’",
        athletic_shoe: "ðŸ‘Ÿ",
        mans_shoe: "ðŸ‘ž",
        sandal: "ðŸ‘¡",
        high_heel: "ðŸ‘ ",
        boot: "ðŸ‘¢",
        shirt: "ðŸ‘•",
        necktie: "ðŸ‘”",
        womans_clothes: "ðŸ‘š",
        dress: "ðŸ‘—",
        running_shirt_with_sash: "ðŸŽ½",
        jeans: "ðŸ‘–",
        kimono: "ðŸ‘˜",
        bikini: "ðŸ‘™",
        briefcase: "ðŸ’¼",
        handbag: "ðŸ‘œ",
        pouch: "ðŸ‘",
        purse: "ðŸ‘›",
        eyeglasses: "ðŸ‘“",
        ribbon: "ðŸŽ€",
        closed_umbrella: "ðŸŒ‚",
        lipstick: "ðŸ’„",
        yellow_heart: "ðŸ’›",
        blue_heart: "ðŸ’™",
        purple_heart: "ðŸ’œ",
        green_heart: "ðŸ’š",
        broken_heart: "ðŸ’”",
        heartpulse: "ðŸ’—",
        heartbeat: "ðŸ’“",
        two_hearts: "ðŸ’•",
        sparkling_heart: "ðŸ’–",
        revolving_hearts: "ðŸ’ž",
        cupid: "ðŸ’˜",
        love_letter: "ðŸ’Œ",
        kiss: "ðŸ’‹",
        ring: "ðŸ’",
        gem: "ðŸ’Ž",
        bust_in_silhouette: "ðŸ‘¤",
        speech_balloon: "ðŸ’¬",
        footprints: "ðŸ‘£",
    },
    nature: {
        dog: "ðŸ¶",
        wolf: "ðŸº",
        cat: "ðŸ±",
        mouse: "ðŸ­",
        hamster: "ðŸ¹",
        rabbit: "ðŸ°",
        frog: "ðŸ¸",
        tiger: "ðŸ¯",
        koala: "ðŸ¨",
        bear: "ðŸ»",
        pig: "ðŸ·",
        pig_nose: "ðŸ½",
        cow: "ðŸ®",
        boar: "ðŸ—",
        monkey_face: "ðŸµ",
        monkey: "ðŸ’",
        horse: "ðŸ´",
        sheep: "ðŸ‘",
        elephant: "ðŸ˜",
        panda_face: "ðŸ¼",
        penguin: "ðŸ§",
        bird: "ðŸ¦",
        baby_chick: "ðŸ¤",
        hatched_chick: "ðŸ¥",
        hatching_chick: "ðŸ£",
        chicken: "ðŸ”",
        snake: "ðŸ",
        turtle: "ðŸ¢",
        bug: "ðŸ›",
        bee: "ðŸ",
        ant: "ðŸœ",
        beetle: "ðŸž",
        snail: "ðŸŒ",
        octopus: "ðŸ™",
        shell: "ðŸš",
        tropical_fish: "ðŸ ",
        fish: "ðŸŸ",
        dolphin: "ðŸ¬",
        whale: "ðŸ³",
        racehorse: "ðŸŽ",
        dragon_face: "ðŸ²",
        blowfish: "ðŸ¡",
        camel: "ðŸ«",
        poodle: "ðŸ©",
        feet: "ðŸ¾",
        bouquet: "ðŸ’",
        cherry_blossom: "ðŸŒ¸",
        tulip: "ðŸŒ·",
        four_leaf_clover: "ðŸ€",
        rose: "ðŸŒ¹",
        sunflower: "ðŸŒ»",
        hibiscus: "ðŸŒº",
        maple_leaf: "ðŸ",
        leaves: "ðŸƒ",
        fallen_leaf: "ðŸ‚",
        herb: "ðŸŒ¿",
        ear_of_rice: "ðŸŒ¾",
        mushroom: "ðŸ„",
        cactus: "ðŸŒµ",
        palm_tree: "ðŸŒ´",
        chestnut: "ðŸŒ°",
        seedling: "ðŸŒ±",
        blossom: "ðŸŒ¼",
        new_moon: "ðŸŒ‘",
        first_quarter_moon: "ðŸŒ“",
        moon: "ðŸŒ”",
        full_moon: "ðŸŒ•",
        first_quarter_moon_with_face: "ðŸŒ›",
        crescent_moon: "ðŸŒ™",
        earth_asia: "ðŸŒ",
        volcano: "ðŸŒ‹",
        milky_way: "ðŸŒŒ",
        stars: "ðŸŒ ",
        partly_sunny: "â›…",
        snowman: "â›„",
        cyclone: "ðŸŒ€",
        foggy: "ðŸŒ",
        rainbow: "ðŸŒˆ",
        ocean: "ðŸŒŠ",
    },
    objects: {
        bamboo: "ðŸŽ",
        gift_heart: "ðŸ’",
        dolls: "ðŸŽŽ",
        school_satchel: "ðŸŽ’",
        mortar_board: "ðŸŽ“",
        flags: "ðŸŽ",
        fireworks: "ðŸŽ†",
        sparkler: "ðŸŽ‡",
        wind_chime: "ðŸŽ",
        rice_scene: "ðŸŽ‘",
        jack_o_lantern: "ðŸŽƒ",
        ghost: "ðŸ‘»",
        santa: "ðŸŽ…",
        christmas_tree: "ðŸŽ„",
        gift: "ðŸŽ",
        tanabata_tree: "ðŸŽ‹",
        tada: "ðŸŽ‰",
        confetti_ball: "ðŸŽŠ",
        balloon: "ðŸŽˆ",
        crossed_flags: "ðŸŽŒ",
        crystal_ball: "ðŸ”®",
        movie_camera: "ðŸŽ¥",
        camera: "ðŸ“·",
        video_camera: "ðŸ“¹",
        vhs: "ðŸ“¼",
        cd: "ðŸ’¿",
        dvd: "ðŸ“€",
        minidisc: "ðŸ’½",
        floppy_disk: "ðŸ’¾",
        computer: "ðŸ’»",
        iphone: "ðŸ“±",
        telephone_receiver: "ðŸ“ž",
        pager: "ðŸ“Ÿ",
        fax: "ðŸ“ ",
        satellite: "ðŸ“¡",
        tv: "ðŸ“º",
        radio: "ðŸ“»",
        loud_sound: "ðŸ”Š",
        bell: "ðŸ””",
        loudspeaker: "ðŸ“¢",
        mega: "ðŸ“£",
        hourglass_flowing_sand: "â³",
        hourglass: "âŒ›",
        alarm_clock: "â°",
        watch: "âŒš",
        unlock: "ðŸ”“",
        lock: "ðŸ”’",
        lock_with_ink_pen: "ðŸ”",
        closed_lock_with_key: "ðŸ”",
        key: "ðŸ”‘",
        mag_right: "ðŸ”Ž",
        bulb: "ðŸ’¡",
        flashlight: "ðŸ”¦",
        electric_plug: "ðŸ”Œ",
        battery: "ðŸ”‹",
        mag: "ðŸ”",
        bath: "ðŸ›€",
        toilet: "ðŸš½",
        wrench: "ðŸ”§",
        nut_and_bolt: "ðŸ”©",
        hammer: "ðŸ”¨",
        door: "ðŸšª",
        smoking: "ðŸš¬",
        bomb: "ðŸ’£",
        gun: "ðŸ”«",
        hocho: "ðŸ”ª",
        pill: "ðŸ’Š",
        syringe: "ðŸ’‰",
        moneybag: "ðŸ’°",
        yen: "ðŸ’´",
        dollar: "ðŸ’µ",
        credit_card: "ðŸ’³",
        money_with_wings: "ðŸ’¸",
        calling: "ðŸ“²",
        "e-mail": "ðŸ“§",
        inbox_tray: "ðŸ“¥",
        outbox_tray: "ðŸ“¤",
        envelope_with_arrow: "ðŸ“©",
        incoming_envelope: "ðŸ“¨",
        mailbox: "ðŸ“«",
        mailbox_closed: "ðŸ“ª",
        postbox: "ðŸ“®",
        package: "ðŸ“¦",
        memo: "ðŸ“",
        page_facing_up: "ðŸ“„",
        page_with_curl: "ðŸ“ƒ",
        bookmark_tabs: "ðŸ“‘",
        bar_chart: "ðŸ“Š",
        chart_with_upwards_trend: "ðŸ“ˆ",
        chart_with_downwards_trend: "ðŸ“‰",
        scroll: "ðŸ“œ",
        clipboard: "ðŸ“‹",
        date: "ðŸ“…",
        calendar: "ðŸ“†",
        card_index: "ðŸ“‡",
        file_folder: "ðŸ“",
        open_file_folder: "ðŸ“‚",
        pushpin: "ðŸ“Œ",
        paperclip: "ðŸ“Ž",
        straight_ruler: "ðŸ“",
        triangular_ruler: "ðŸ“",
        closed_book: "ðŸ“•",
        green_book: "ðŸ“—",
        blue_book: "ðŸ“˜",
        orange_book: "ðŸ“™",
        notebook: "ðŸ““",
        notebook_with_decorative_cover: "ðŸ“”",
        ledger: "ðŸ“’",
        books: "ðŸ“š",
        book: "ðŸ“–",
        bookmark: "ðŸ”–",
        name_badge: "ðŸ“›",
        newspaper: "ðŸ“°",
        art: "ðŸŽ¨",
        clapper: "ðŸŽ¬",
        microphone: "ðŸŽ¤",
        headphones: "ðŸŽ§",
        musical_score: "ðŸŽ¼",
        musical_note: "ðŸŽµ",
        notes: "ðŸŽ¶",
        musical_keyboard: "ðŸŽ¹",
        violin: "ðŸŽ»",
        trumpet: "ðŸŽº",
        saxophone: "ðŸŽ·",
        guitar: "ðŸŽ¸",
        space_invader: "ðŸ‘¾",
        video_game: "ðŸŽ®",
        black_joker: "ðŸƒ",
        flower_playing_cards: "ðŸŽ´",
        mahjong: "ðŸ€„",
        game_die: "ðŸŽ²",
        dart: "ðŸŽ¯",
        football: "ðŸˆ",
        basketball: "ðŸ€",
        soccer: "âš½",
        baseball: "âš¾",
        tennis: "ðŸŽ¾",
        "8ball": "ðŸŽ±",
        bowling: "ðŸŽ³",
        golf: "â›³",
        checkered_flag: "ðŸ",
        trophy: "ðŸ†",
        ski: "ðŸŽ¿",
        snowboarder: "ðŸ‚",
        swimmer: "ðŸŠ",
        surfer: "ðŸ„",
        fishing_pole_and_fish: "ðŸŽ£",
        tea: "ðŸµ",
        sake: "ðŸ¶",
        beer: "ðŸº",
        beers: "ðŸ»",
        cocktail: "ðŸ¸",
        tropical_drink: "ðŸ¹",
        wine_glass: "ðŸ·",
        fork_and_knife: "ðŸ´",
        pizza: "ðŸ•",
        hamburger: "ðŸ”",
        fries: "ðŸŸ",
        poultry_leg: "ðŸ—",
        meat_on_bone: "ðŸ–",
        spaghetti: "ðŸ",
        curry: "ðŸ›",
        fried_shrimp: "ðŸ¤",
        bento: "ðŸ±",
        sushi: "ðŸ£",
        fish_cake: "ðŸ¥",
        rice_ball: "ðŸ™",
        rice_cracker: "ðŸ˜",
        rice: "ðŸš",
        ramen: "ðŸœ",
        stew: "ðŸ²",
        oden: "ðŸ¢",
        dango: "ðŸ¡",
        egg: "ðŸ³",
        bread: "ðŸž",
        doughnut: "ðŸ©",
        custard: "ðŸ®",
        icecream: "ðŸ¦",
        ice_cream: "ðŸ¨",
        shaved_ice: "ðŸ§",
        birthday: "ðŸŽ‚",
        cake: "ðŸ°",
        cookie: "ðŸª",
        chocolate_bar: "ðŸ«",
        candy: "ðŸ¬",
        lollipop: "ðŸ­",
        honey_pot: "ðŸ¯",
        apple: "ðŸŽ",
        green_apple: "ðŸ",
        tangerine: "ðŸŠ",
        cherries: "ðŸ’",
        grapes: "ðŸ‡",
        watermelon: "ðŸ‰",
        strawberry: "ðŸ“",
        peach: "ðŸ‘",
        melon: "ðŸˆ",
        banana: "ðŸŒ",
        pineapple: "ðŸ",
        sweet_potato: "ðŸ ",
        eggplant: "ðŸ†",
        tomato: "ðŸ…",
        corn: "ðŸŒ½",
    },
    places: {
        house: "ðŸ ",
        house_with_garden: "ðŸ¡",
        school: "ðŸ«",
        office: "ðŸ¢",
        post_office: "ðŸ£",
        hospital: "ðŸ¥",
        bank: "ðŸ¦",
        convenience_store: "ðŸª",
        love_hotel: "ðŸ©",
        hotel: "ðŸ¨",
        wedding: "ðŸ’’",
        church: "â›ª",
        department_store: "ðŸ¬",
        city_sunrise: "ðŸŒ‡",
        city_sunset: "ðŸŒ†",
        japanese_castle: "ðŸ¯",
        european_castle: "ðŸ°",
        tent: "â›º",
        factory: "ðŸ­",
        tokyo_tower: "ðŸ—¼",
        japan: "ðŸ—¾",
        mount_fuji: "ðŸ—»",
        sunrise_over_mountains: "ðŸŒ„",
        sunrise: "ðŸŒ…",
        night_with_stars: "ðŸŒƒ",
        statue_of_liberty: "ðŸ—½",
        bridge_at_night: "ðŸŒ‰",
        carousel_horse: "ðŸŽ ",
        ferris_wheel: "ðŸŽ¡",
        fountain: "â›²",
        roller_coaster: "ðŸŽ¢",
        ship: "ðŸš¢",
        boat: "â›µ",
        speedboat: "ðŸš¤",
        rocket: "ðŸš€",
        seat: "ðŸ’º",
        station: "ðŸš‰",
        bullettrain_side: "ðŸš„",
        bullettrain_front: "ðŸš…",
        metro: "ðŸš‡",
        railway_car: "ðŸšƒ",
        bus: "ðŸšŒ",
        blue_car: "ðŸš™",
        car: "ðŸš—",
        taxi: "ðŸš•",
        truck: "ðŸšš",
        rotating_light: "ðŸš¨",
        police_car: "ðŸš“",
        fire_engine: "ðŸš’",
        ambulance: "ðŸš‘",
        bike: "ðŸš²",
        barber: "ðŸ’ˆ",
        busstop: "ðŸš",
        ticket: "ðŸŽ«",
        traffic_light: "ðŸš¥",
        construction: "ðŸš§",
        beginner: "ðŸ”°",
        fuelpump: "â›½",
        izakaya_lantern: "ðŸ®",
        slot_machine: "ðŸŽ°",
        moyai: "ðŸ—¿",
        circus_tent: "ðŸŽª",
        performing_arts: "ðŸŽ­",
        round_pushpin: "ðŸ“",
        triangular_flag_on_post: "ðŸš©",
    },
    symbols: {
        keycap_ten: "ðŸ”Ÿ",
        1234: "ðŸ”¢",
        symbols: "ðŸ”£",
        capital_abcd: "ðŸ” ",
        abcd: "ðŸ”¡",
        abc: "ðŸ”¤",
        arrow_up_small: "ðŸ”¼",
        arrow_down_small: "ðŸ”½",
        rewind: "âª",
        fast_forward: "â©",
        arrow_double_up: "â«",
        arrow_double_down: "â¬",
        ok: "ðŸ†—",
        new: "ðŸ†•",
        up: "ðŸ†™",
        cool: "ðŸ†’",
        free: "ðŸ†“",
        ng: "ðŸ†–",
        signal_strength: "ðŸ“¶",
        cinema: "ðŸŽ¦",
        koko: "ðŸˆ",
        u6307: "ðŸˆ¯",
        u7a7a: "ðŸˆ³",
        u6e80: "ðŸˆµ",
        u5408: "ðŸˆ´",
        u7981: "ðŸˆ²",
        ideograph_advantage: "ðŸ‰",
        u5272: "ðŸˆ¹",
        u55b6: "ðŸˆº",
        u6709: "ðŸˆ¶",
        u7121: "ðŸˆš",
        restroom: "ðŸš»",
        mens: "ðŸš¹",
        womens: "ðŸšº",
        baby_symbol: "ðŸš¼",
        wc: "ðŸš¾",
        no_smoking: "ðŸš­",
        u7533: "ðŸˆ¸",
        accept: "ðŸ‰‘",
        cl: "ðŸ†‘",
        sos: "ðŸ†˜",
        id: "ðŸ†”",
        no_entry_sign: "ðŸš«",
        underage: "ðŸ”ž",
        no_entry: "â›”",
        negative_squared_cross_mark: "âŽ",
        white_check_mark: "âœ…",
        heart_decoration: "ðŸ’Ÿ",
        vs: "ðŸ†š",
        vibration_mode: "ðŸ“³",
        mobile_phone_off: "ðŸ“´",
        ab: "ðŸ†Ž",
        diamond_shape_with_a_dot_inside: "ðŸ’ ",
        ophiuchus: "â›Ž",
        six_pointed_star: "ðŸ”¯",
        atm: "ðŸ§",
        chart: "ðŸ’¹",
        heavy_dollar_sign: "ðŸ’²",
        currency_exchange: "ðŸ’±",
        x: "âŒ",
        exclamation: "â—",
        question: "â“",
        grey_exclamation: "â•",
        grey_question: "â”",
        o: "â­•",
        top: "ðŸ”",
        end: "ðŸ”š",
        back: "ðŸ”™",
        on: "ðŸ”›",
        soon: "ðŸ”œ",
        arrows_clockwise: "ðŸ”ƒ",
        clock12: "ðŸ•›",
        clock1: "ðŸ•",
        clock2: "ðŸ•‘",
        clock3: "ðŸ•’",
        clock4: "ðŸ•“",
        clock5: "ðŸ•”",
        clock6: "ðŸ••",
        clock7: "ðŸ•–",
        clock8: "ðŸ•—",
        clock9: "ðŸ•˜",
        clock10: "ðŸ•™",
        clock11: "ðŸ•š",
        heavy_plus_sign: "âž•",
        heavy_minus_sign: "âž–",
        heavy_division_sign: "âž—",
        white_flower: "ðŸ’®",
        100: "ðŸ’¯",
        radio_button: "ðŸ”˜",
        link: "ðŸ”—",
        curly_loop: "âž°",
        trident: "ðŸ”±",
        small_red_triangle: "ðŸ”º",
        black_square_button: "ðŸ”²",
        white_square_button: "ðŸ”³",
        red_circle: "ðŸ”´",
        large_blue_circle: "ðŸ”µ",
        small_red_triangle_down: "ðŸ”»",
        white_large_square: "â¬œ",
        black_large_square: "â¬›",
        large_orange_diamond: "ðŸ”¶",
        large_blue_diamond: "ðŸ”·",
        small_orange_diamond: "ðŸ”¸",
        small_blue_diamond: "ðŸ”¹",
    },
    flags: [
        "ðŸ",
        "ðŸš©",
        "ðŸŽŒ",
        "ðŸ´",
        "ðŸ³ï¸",
        "ðŸ³ï¸â€ðŸŒˆ",
        "ðŸ³â€ðŸŒˆ",
        "ðŸ´â€â˜ ï¸",
        "ðŸ‡¦ðŸ‡¨",
        "ðŸ‡¦ðŸ‡©",
        "ðŸ‡¦ðŸ‡ª",
        "ðŸ‡¦ðŸ‡«",
        "ðŸ‡¦ðŸ‡¬",
        "ðŸ‡¦ðŸ‡®",
        "ðŸ‡¦ðŸ‡±",
        "ðŸ‡¦ðŸ‡²",
        "ðŸ‡¦ðŸ‡´",
        "ðŸ‡¦ðŸ‡¶",
        "ðŸ‡¦ðŸ‡·",
        "ðŸ‡¦ðŸ‡¸",
        "ðŸ‡¦ðŸ‡¹",
        "ðŸ‡¦ðŸ‡º",
        "ðŸ‡¦ðŸ‡¼",
        "ðŸ‡¦ðŸ‡½",
        "ðŸ‡¦ðŸ‡¿",
        "ðŸ‡§ðŸ‡¦",
        "ðŸ‡§ðŸ‡§",
        "ðŸ‡§ðŸ‡©",
        "ðŸ‡§ðŸ‡ª",
        "ðŸ‡§ðŸ‡«",
        "ðŸ‡§ðŸ‡¬",
        "ðŸ‡§ðŸ‡­",
        "ðŸ‡§ðŸ‡®",
        "ðŸ‡§ðŸ‡¯",
        "ðŸ‡§ðŸ‡±",
        "ðŸ‡§ðŸ‡²",
        "ðŸ‡§ðŸ‡³",
        "ðŸ‡§ðŸ‡´",
        "ðŸ‡§ðŸ‡¶",
        "ðŸ‡§ðŸ‡·",
        "ðŸ‡§ðŸ‡¸",
        "ðŸ‡§ðŸ‡¹",
        "ðŸ‡§ðŸ‡»",
        "ðŸ‡§ðŸ‡¼",
        "ðŸ‡§ðŸ‡¾",
        "ðŸ‡§ðŸ‡¿",
        "ðŸ‡¨ðŸ‡¦",
        "ðŸ‡¨ðŸ‡¨",
        "ðŸ‡¨ðŸ‡©",
        "ðŸ‡¨ðŸ‡«",
        "ðŸ‡¨ðŸ‡¬",
        "ðŸ‡¨ðŸ‡­",
        "ðŸ‡¨ðŸ‡®",
        "ðŸ‡¨ðŸ‡°",
        "ðŸ‡¨ðŸ‡±",
        "ðŸ‡¨ðŸ‡²",
        "ðŸ‡¨ðŸ‡³",
        "ðŸ‡¨ðŸ‡´",
        "ðŸ‡¨ðŸ‡µ",
        "ðŸ‡¨ðŸ‡·",
        "ðŸ‡¨ðŸ‡º",
        "ðŸ‡¨ðŸ‡»",
        "ðŸ‡¨ðŸ‡¼",
        "ðŸ‡¨ðŸ‡½",
        "ðŸ‡¨ðŸ‡¾",
        "ðŸ‡¨ðŸ‡¿",
        "ðŸ‡©ðŸ‡ª",
        "ðŸ‡©ðŸ‡¬",
        "ðŸ‡©ðŸ‡¯",
        "ðŸ‡©ðŸ‡°",
        "ðŸ‡©ðŸ‡²",
        "ðŸ‡©ðŸ‡´",
        "ðŸ‡©ðŸ‡¿",
        "ðŸ‡ªðŸ‡¦",
        "ðŸ‡ªðŸ‡¨",
        "ðŸ‡ªðŸ‡ª",
        "ðŸ‡ªðŸ‡¬",
        "ðŸ‡ªðŸ‡­",
        "ðŸ‡ªðŸ‡·",
        "ðŸ‡ªðŸ‡¸",
        "ðŸ‡ªðŸ‡¹",
        "ðŸ‡ªðŸ‡º",
        "ðŸ‡«ðŸ‡®",
        "ðŸ‡«ðŸ‡¯",
        "ðŸ‡«ðŸ‡°",
        "ðŸ‡«ðŸ‡²",
        "ðŸ‡«ðŸ‡´",
        "ðŸ‡«ðŸ‡·",
        "ðŸ‡¬ðŸ‡¦",
        "ðŸ‡¬ðŸ‡§",
        "ðŸ‡¬ðŸ‡©",
        "ðŸ‡¬ðŸ‡ª",
        "ðŸ‡¬ðŸ‡«",
        "ðŸ‡¬ðŸ‡¬",
        "ðŸ‡¬ðŸ‡­",
        "ðŸ‡¬ðŸ‡®",
        "ðŸ‡¬ðŸ‡±",
        "ðŸ‡¬ðŸ‡²",
        "ðŸ‡¬ðŸ‡³",
        "ðŸ‡¬ðŸ‡µ",
        "ðŸ‡¬ðŸ‡¶",
        "ðŸ‡¬ðŸ‡·",
        "ðŸ‡¬ðŸ‡¸",
        "ðŸ‡¬ðŸ‡¹",
        "ðŸ‡¬ðŸ‡º",
        "ðŸ‡¬ðŸ‡¼",
        "ðŸ‡¬ðŸ‡¾",
        "ðŸ‡­ðŸ‡°",
        "ðŸ‡­ðŸ‡²",
        "ðŸ‡­ðŸ‡³",
        "ðŸ‡­ðŸ‡·",
        "ðŸ‡­ðŸ‡¹",
        "ðŸ‡­ðŸ‡º",
        "ðŸ‡®ðŸ‡¨",
        "ðŸ‡®ðŸ‡©",
        "ðŸ‡®ðŸ‡ª",
        "ðŸ‡®ðŸ‡±",
        "ðŸ‡®ðŸ‡²",
        "ðŸ‡®ðŸ‡³",
        "ðŸ‡®ðŸ‡´",
        "ðŸ‡®ðŸ‡¶",
        "ðŸ‡®ðŸ‡·",
        "ðŸ‡®ðŸ‡¸",
        "ðŸ‡®ðŸ‡¹",
        "ðŸ‡¯ðŸ‡ª",
        "ðŸ‡¯ðŸ‡²",
        "ðŸ‡¯ðŸ‡´",
        "ðŸ‡¯ðŸ‡µ",
        "ðŸ‡°ðŸ‡ª",
        "ðŸ‡°ðŸ‡¬",
        "ðŸ‡°ðŸ‡­",
        "ðŸ‡°ðŸ‡®",
        "ðŸ‡°ðŸ‡²",
        "ðŸ‡°ðŸ‡³",
        "ðŸ‡°ðŸ‡µ",
        "ðŸ‡°ðŸ‡·",
        "ðŸ‡°ðŸ‡¼",
        "ðŸ‡°ðŸ‡¾",
        "ðŸ‡°ðŸ‡¿",
        "ðŸ‡±ðŸ‡¦",
        "ðŸ‡±ðŸ‡§",
        "ðŸ‡±ðŸ‡¨",
        "ðŸ‡±ðŸ‡®",
        "ðŸ‡±ðŸ‡°",
        "ðŸ‡±ðŸ‡·",
        "ðŸ‡±ðŸ‡¸",
        "ðŸ‡±ðŸ‡¹",
        "ðŸ‡±ðŸ‡º",
        "ðŸ‡±ðŸ‡»",
        "ðŸ‡±ðŸ‡¾",
        "ðŸ‡²ðŸ‡¦",
        "ðŸ‡²ðŸ‡¨",
        "ðŸ‡²ðŸ‡©",
        "ðŸ‡²ðŸ‡ª",
        "ðŸ‡²ðŸ‡«",
        "ðŸ‡²ðŸ‡¬",
        "ðŸ‡²ðŸ‡­",
        "ðŸ‡²ðŸ‡°",
        "ðŸ‡²ðŸ‡±",
        "ðŸ‡²ðŸ‡²",
        "ðŸ‡²ðŸ‡³",
        "ðŸ‡²ðŸ‡´",
        "ðŸ‡²ðŸ‡µ",
        "ðŸ‡²ðŸ‡¶",
        "ðŸ‡²ðŸ‡·",
        "ðŸ‡²ðŸ‡¸",
        "ðŸ‡²ðŸ‡¹",
        "ðŸ‡²ðŸ‡º",
        "ðŸ‡²ðŸ‡»",
        "ðŸ‡²ðŸ‡¼",
        "ðŸ‡²ðŸ‡½",
        "ðŸ‡²ðŸ‡¾",
        "ðŸ‡²ðŸ‡¿",
        "ðŸ‡³ðŸ‡¦",
        "ðŸ‡³ðŸ‡¨",
        "ðŸ‡³ðŸ‡ª",
        "ðŸ‡³ðŸ‡«",
        "ðŸ‡³ðŸ‡¬",
        "ðŸ‡³ðŸ‡®",
        "ðŸ‡³ðŸ‡±",
        "ðŸ‡³ðŸ‡´",
        "ðŸ‡³ðŸ‡µ",
        "ðŸ‡³ðŸ‡·",
        "ðŸ‡³ðŸ‡º",
        "ðŸ‡³ðŸ‡¿",
        "ðŸ‡´ðŸ‡²",
        "ðŸ‡µðŸ‡¦",
        "ðŸ‡µðŸ‡ª",
        "ðŸ‡µðŸ‡«",
        "ðŸ‡µðŸ‡¬",
        "ðŸ‡µðŸ‡­",
        "ðŸ‡µðŸ‡°",
        "ðŸ‡µðŸ‡±",
        "ðŸ‡µðŸ‡²",
        "ðŸ‡µðŸ‡³",
        "ðŸ‡µðŸ‡·",
        "ðŸ‡µðŸ‡¸",
        "ðŸ‡µðŸ‡¹",
        "ðŸ‡µðŸ‡¼",
        "ðŸ‡µðŸ‡¾",
        "ðŸ‡¶ðŸ‡¦",
        "ðŸ‡·ðŸ‡ª",
        "ðŸ‡·ðŸ‡´",
        "ðŸ‡·ðŸ‡¸",
        "ðŸ‡·ðŸ‡º",
        "ðŸ‡·ðŸ‡¼",
        "ðŸ‡¸ðŸ‡¦",
        "ðŸ‡¸ðŸ‡§",
        "ðŸ‡¸ðŸ‡¨",
        "ðŸ‡¸ðŸ‡©",
        "ðŸ‡¸ðŸ‡ª",
        "ðŸ‡¸ðŸ‡¬",
        "ðŸ‡¸ðŸ‡­",
        "ðŸ‡¸ðŸ‡®",
        "ðŸ‡¸ðŸ‡¯",
        "ðŸ‡¸ðŸ‡°",
        "ðŸ‡¸ðŸ‡±",
        "ðŸ‡¸ðŸ‡²",
        "ðŸ‡¸ðŸ‡³",
        "ðŸ‡¸ðŸ‡´",
        "ðŸ‡¸ðŸ‡·",
        "ðŸ‡¸ðŸ‡¸",
        "ðŸ‡¸ðŸ‡¹",
        "ðŸ‡¸ðŸ‡»",
        "ðŸ‡¸ðŸ‡½",
        "ðŸ‡¸ðŸ‡¾",
        "ðŸ‡¸ðŸ‡¿",
        "ðŸ‡¹ðŸ‡¦",
        "ðŸ‡¹ðŸ‡¨",
        "ðŸ‡¹ðŸ‡©",
        "ðŸ‡¹ðŸ‡«",
        "ðŸ‡¹ðŸ‡¬",
        "ðŸ‡¹ðŸ‡­",
        "ðŸ‡¹ðŸ‡¯",
        "ðŸ‡¹ðŸ‡°",
        "ðŸ‡¹ðŸ‡±",
        "ðŸ‡¹ðŸ‡²",
        "ðŸ‡¹ðŸ‡³",
        "ðŸ‡¹ðŸ‡´",
        "ðŸ‡¹ðŸ‡·",
        "ðŸ‡¹ðŸ‡¹",
        "ðŸ‡¹ðŸ‡»",
        "ðŸ‡¹ðŸ‡¼",
        "ðŸ‡¹ðŸ‡¿",
        "ðŸ‡ºðŸ‡¦",
        "ðŸ‡ºðŸ‡¬",
        "ðŸ‡ºðŸ‡²",
        "ðŸ‡ºðŸ‡³",
        "ðŸ‡ºðŸ‡¸",
        "ðŸ‡ºðŸ‡¾",
        "ðŸ‡ºðŸ‡¿",
        "ðŸ‡»ðŸ‡¦",
        "ðŸ‡»ðŸ‡¨",
        "ðŸ‡»ðŸ‡ª",
        "ðŸ‡»ðŸ‡¬",
        "ðŸ‡»ðŸ‡®",
        "ðŸ‡»ðŸ‡³",
        "ðŸ‡»ðŸ‡º",
        "ðŸ‡¼ðŸ‡«",
        "ðŸ‡¼ðŸ‡¸",
        "ðŸ‡½ðŸ‡°",
        "ðŸ‡¾ðŸ‡ª",
        "ðŸ‡¾ðŸ‡¹",
        "ðŸ‡¿ðŸ‡¦",
        "ðŸ‡¿ðŸ‡²",
        "ðŸ‡¿ðŸ‡¼"
    ]
});
