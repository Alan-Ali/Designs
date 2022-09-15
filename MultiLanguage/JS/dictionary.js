const langs = {
    "en": {
        "type": "ltr",
        "dictionary": {
            store:"store",
            french_fry_restaurant:"French Fry Restaurant",
            restaurant:"Restaurant",
            view_all:"View All",
            steak_food:"Steak Food",
            rest_desc:"Restaurant Description",
            area:"Area",
            total_employee:"Total Employee",
            opening_time:"Opening Time",
            closing_time:"Closing Time",
            place:"Place:",
            road:"Road:",
            mail:"Mail:",
            phone:"Phone:",
            food_menu:"Food Menu",
            food_name:"Food Name",
            total_item:"Total Item",
            total_sale:"Total Sale",
            pizza:"Pizza",
            sushi:"Sushi",
            food_menu:"Food Menu",
            product_name:"Product Name",
            import_day:"Import Day",
            smart_chair:"Smart Chair",
            printer:"Printer",
        }
    },
    "ku":{
        "type": "rtl",
        "dictionary": {
            store:"بازاڕ",
            french_fry_restaurant:"فرێنچ فرای ڕێستۆرانت",
            restaurant:"ڕێستۆرانت",
            view_all:"پیشاندان",
            steak_food:"ستیک و خواردنی خێرا",
            rest_desc:"زانیاری ڕێستۆرانت",
            area:"ناوچە",
            total_employee:"بڕی کارمەندەکان",
            opening_time:"کاتی کردنەوە",
            closing_time:"کاتی داخستن",
            place:"شوێن:",
            road:"ڕێگا:",
            mail:"مەیڵ:",
            phone:"تەلەفون:",
            food_menu:"مێنوی خواردن",
            food_name:"ناوی خواردن",
            total_item:"بڕی کەلوپەل",
            total_sale:"بڕی فرۆشتن",
            pizza:"پیتزا",
            sushi:"سوشی",
            food_menu:"مێنوی خواردن",
            product_name:"ناوی پرۆدەکت",
            import_day:"ڕۆژی ناردن",
            smart_chair:"کورسی زیرەک",
            printer:"پرینتەر",
        }
    },
    // ar:{
    //     type: "rtl",
    //     dict: {
    //         store:"store",
    //         french_fry_restaurant:"French Fry Restaurant",
    //         restaurant:"Restaurant",
    //         view_all:"View All",
    //         steak_food:"Steak Food",
    //         rest_desc:"Restaurant Description",
    //         area:"Area",
    //         total_employee:"Total Employee",
    //         opening_time:"Opening Time",
    //         closing_time:"Closing Time",
    //         food_menu:"Food Menu",
    //         food_name:"Food Name",
    //         total_item:"Total Item",
    //         total_sale:"Total Sale",
    //         pizza:"Pizza",
    //         sushi:"Sushi",
    //         food_menu:"Food Menu",
    //         product_name:"Product Name",
    //         import_day:"Import Day",
    //         smart_chair:"Smart Chair",
    //         printer:"Printer",
    //     }
    // }
}


if(!localStorage.getItem('langs')){
    window.localStorage.setItem('langs', JSON.stringify(langs))
}

