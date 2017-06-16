// function initDatepicker() {
    
//     let date = new Date();

//     function setCalendar(date) {
//         $('.datepicker .datechose .day tbody').html('');

//         const year = date.getFullYear();
//         const month = date.getMonth() + 1;
//         const day = date.getDate();
//         const week = date.getDay();

//         $('.datepicker .datechose .change span').text(year+'年'+month+'月'+day+'日');

//         const theFirstday = new Date(year,month-1,1);
//         const theLastday = new Date(year,month,0);

//         const theFirstdayweek = theFirstday.getDay();

//         var count= 1;
//         var nextCount = 1;
//         let line = Math.ceil((theLastday.getDate() + theFirstdayweek-1)/7);

//         if(theFirstdayweek !== 1) {
//             // 上月最后一天
//             var preLastday =  new Date(year,month-1,0).getDate();

//             var thePreFirst = preLastday - (theFirstdayweek - 2);


//             for(var i = 1; i <= line; i ++) {
//                 var tr = $('<tr></tr>');
//                 for(var j = 1; j <= 7; j ++) {
//                     var td = $('<td></td>');
//                     if(thePreFirst <= preLastday) {
//                         td.html(thePreFirst);
//                         td.addClass('preMonth');
//                         thePreFirst ++;
//                         tr.append(td);                
//                     }else {
//                         if(count <= theLastday.getDate()) {
//                             td.html(count);
//                             if(count == day){
//                                 td.addClass('selected');
//                             }
//                             tr.append(td);

//                             count ++;
//                         }else {
//                             td.html(nextCount);
//                             td.addClass('nextMonth');
//                             tr.append(td);
//                             nextCount ++;
//                         }
//                     }
//                 }
//                 $('.datepicker .datechose .day tbody').append(tr);
//             }
//         } else {

//             for(var i = 1; i <= line; i ++) {
//                 var tr = $('<tr></tr>');
//                 for(var j = 1; j <= 7; j ++) {

//                     var td = $('<td></td>');
//                     if(count <= theLastday.getDate()) {
//                         td.html(count);
//                         if(count == day){
//                             td.addClass('selected');
//                         }
//                         tr.append(td);

//                         count ++;
//                     }else {
//                         td.html(nextCount);
//                         td.addClass('nextMonth');
//                         tr.append(td);
//                         nextCount ++;
//                     }
//                 }
//                 $('.datepicker .datechose .day tbody').append(tr);
//             }
//         }

//     }

//     setCalendar(date);

//     $('.preYear').on('click',function() {
//         date = date.setFullYear(date.getFullYear()-1);
//         date= new Date(date);
//         setCalendar(date);
//     })

//     $('.preMonth').on('click',function() {
//         date = date.setMonth(date.getMonth()-1);
//         date= new Date(date);
//         setCalendar(date);
//     })
//     $('.nextYear').on('click',function() {
//         date = date.setFullYear(date.getFullYear()+1);
//         date= new Date(date);
//         setCalendar(date);
//     })
//     $('.nextMonth').on('click',function() {
//         date = date.setMonth(date.getMonth() + 1);
//         date= new Date(date);
//         setCalendar(date);
//     })

//     $('.datepicker .datechose .day tbody').on('click',function(e){
//         console.log(e.target.innerHTML);
//         if(e.target.classList.contains('preMonth')) {
//             date = date.setMonth(date.getMonth()-1);
//             date = new Date(date);                
//             date = date.setDate(e.target.innerHTML);
//             date = new Date(date);
//             setCalendar(date);
//         } else if(e.target.classList.contains('nextMonth')){
//             date = date.setMonth(date.getMonth() + 1);
//             date = new Date(date);        
//             date = date.setDate(e.target.innerHTML);
//             date = new Date(date);
//             setCalendar(date);
//         } else {
//             date = date.setDate(e.target.innerHTML);
//             date = new Date(date);
//             setCalendar(date);
//         }

//         $('.datepicker .dateinput input').val($('.datepicker .change span').html());
//     })

//     $('.datepicker .datechose .change').on('click',function(e) {
//         e.stopPropagation();
//         $('.datepicker .dateinput input').focus();
//         setTimeout(function(){
//             $('.datepicker .datechose').css('display','block');
//         },200);
//     })

//     //阻止input冒泡
//     $('.datepicker .dateinput input').on('click',function(e) {
//         e.stopPropagation();
//     })

//     //获取焦点事显示
//     $('.datepicker .dateinput input').on('focus',function(){
//         $('.datepicker .datechose').css('display','block');
//     })

//     //点击任何地方都隐藏
//     $(document).on('click',function(){
//         $('.datepicker .datechose').css('display','none');        
//     })
// }
// initDatepicker();

function Datepicker(element) {

    const datepickerHtml = `<div class="datepicker">
        <div class="dateinput">
            <input type="text" value="" placeholder="请选择日期">
        </div>
        <div class="datechose">
            <div class="change">
                <button class="preYear"><</button>
                <button class="preMonth"><</button>
                <span>2017-06-16</span>
                <button class="nextMonth">></button>
                <button class="nextYear">></button>
            </div>
            <div class="day">
                <table>
                    <thead>
                        <tr>
                            <th>一</th>
                            <th>二</th>
                            <th>三</th>
                            <th>四</th>
                            <th>五</th>
                            <th>六</th>
                            <th>日</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>
        </div>
    </div>`;

    let date = new Date();
    this.creactBody = element => {
        $(element).append(datepickerHtml);
    }
    this.setCalendar = date => {
        $('.datepicker .datechose .day tbody').html('');

        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const week = date.getDay();

        $('.datepicker .datechose .change span').text(year+'年'+month+'月'+day+'日');

        const theFirstday = new Date(year,month-1,1);
        const theLastday = new Date(year,month,0);

        const theFirstdayweek = theFirstday.getDay();

        var count= 1;
        var nextCount = 1;
        let line = Math.ceil((theLastday.getDate() + theFirstdayweek-1)/7);

        if(theFirstdayweek !== 1) {
            // 上月最后一天
            var preLastday =  new Date(year,month-1,0).getDate();

            var thePreFirst = preLastday - (theFirstdayweek - 2);


            for(var i = 1; i <= line; i ++) {
                var tr = $('<tr></tr>');
                for(var j = 1; j <= 7; j ++) {
                    var td = $('<td></td>');
                    if(thePreFirst <= preLastday) {
                        td.html(thePreFirst);
                        td.addClass('preMonth');
                        thePreFirst ++;
                        tr.append(td);                
                    }else {
                        if(count <= theLastday.getDate()) {
                            td.html(count);
                            if(count == day){
                                td.addClass('selected');
                            }
                            tr.append(td);

                            count ++;
                        }else {
                            td.html(nextCount);
                            td.addClass('nextMonth');
                            tr.append(td);
                            nextCount ++;
                        }
                    }
                }
                $('.datepicker .datechose .day tbody').append(tr);
            }
        } else {

            for(var i = 1; i <= line; i ++) {
                var tr = $('<tr></tr>');
                for(var j = 1; j <= 7; j ++) {

                    var td = $('<td></td>');
                    if(count <= theLastday.getDate()) {
                        td.html(count);
                        if(count == day){
                            td.addClass('selected');
                        }
                        tr.append(td);

                        count ++;
                    }else {
                        td.html(nextCount);
                        td.addClass('nextMonth');
                        tr.append(td);
                        nextCount ++;
                    }
                }
                $('.datepicker .datechose .day tbody').append(tr);
            }
        }
    }

    this.eventFunc = () => {
        const that = this;
        $('.preYear').on('click',function() {
            date = date.setFullYear(date.getFullYear()-1);
            date= new Date(date);
            that.setCalendar(date);
        })

        $('.preMonth').on('click',function() {
            date = date.setMonth(date.getMonth()-1);
            date= new Date(date);
            that.setCalendar(date);
        })
        $('.nextYear').on('click',function() {
            date = date.setFullYear(date.getFullYear()+1);
            date= new Date(date);
            that.setCalendar(date);
        })
        $('.nextMonth').on('click',function() {
            date = date.setMonth(date.getMonth() + 1);
            date= new Date(date);
            that.setCalendar(date);
        })

        $('.datepicker .datechose .day tbody').on('click',function(e){
            console.log(e.target.innerHTML);
            if(e.target.classList.contains('preMonth')) {
                date = date.setMonth(date.getMonth()-1);
                date = new Date(date);                
                date = date.setDate(e.target.innerHTML);
                date = new Date(date);
                that.setCalendar(date);
            } else if(e.target.classList.contains('nextMonth')){
                date = date.setMonth(date.getMonth() + 1);
                date = new Date(date);        
                date = date.setDate(e.target.innerHTML);
                date = new Date(date);
                that.setCalendar(date);
            } else {
                date = date.setDate(e.target.innerHTML);
                date = new Date(date);
                that.setCalendar(date);
            }

            $('.datepicker .dateinput input').val($('.datepicker .change span').html());
        })

        $('.datepicker .datechose .change').on('click',function(e) {
            e.stopPropagation();
            $('.datepicker .dateinput input').focus();
            setTimeout(function(){
                $('.datepicker .datechose').css('display','block');
            },200);
        })

        //阻止input冒泡
        $('.datepicker .dateinput input').on('click',function(e) {
            e.stopPropagation();
        })

        //获取焦点事显示
        $('.datepicker .dateinput input').on('focus',function(){
            $('.datepicker .datechose').css('display','block');
        })

        //点击任何地方都隐藏
        $(document).on('click',function(){
            $('.datepicker .datechose').css('display','none');        
        })
    }
    
    this.initDatepicker = () => {
        this.setCalendar(date);
        this.eventFunc();
    }

    this.creactBody(element);
}







