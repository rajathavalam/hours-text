'use strict';

/**
 * Adds commas to a number
 * @param {number} number
 * @return {string}
 */
module.exports = function(hours) {
		
	   var d = new Date();
           var date = new Date();
           var days = '';
	   date.setHours(d.getHours() - hours);
           var seconds = Math.floor((new Date() - date) / 1000);

            var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            if (seconds < 5){
                return "just now";
            }else if (seconds < 60){
                return seconds + " seconds ago";
            }
            else if (seconds < 3600) {
                minutes = Math.floor(seconds/60)
                if(minutes > 1)
                    return minutes + " minutes ago";
                else
                    return "1 minute ago";
            }
            else if (seconds < 86400) {
                hours = Math.floor(seconds/3600)
                if(hours > 1)
                    return hours + " hours ago";
                else
                    return "1 hour ago";
            }
            //14 days and no more 2 days - 172800
            else if (seconds < 1209600) {
                days = Math.floor(seconds/86400)
                if(days >= 7 && days <= 14)
                {
                   return "1 week ago";

                 } else if(days >1) {

                 return days + " days ago";


                      }
                    
                else {
                    return "1 day ago";
}
            }
            else{

                //return new Date(time).toLocaleDateString();
                return date.getDate().toString() + " " + months[date.getMonth()] + ", " + date.getFullYear();
            }

};
