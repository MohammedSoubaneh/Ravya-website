export default {

    products: [{
        _id: 'Ravya-25pc',
        title: 'For Your Health',
        name: 'Ravya Turmeric Infusion 25pc',
        image: 'https://i.ibb.co/ZcrSD94/New25pc.jpg',
        cartImage: '/images/New25Cart.jpg',
        price: 20.00,
        brand: 'Ravya',
        countInStock: 5,
        size: "100%",
        headerTop: "30px",
        spaceApart: "60px",
        heroImage: '/images/productImage.png',
        productWidth: '700px',
        // weight: '0.045'
        weight: 4.23288
    },
    {
        _id: 'Ravya-15pc',
        title: 'For Your Creativity',
        name: 'Ravya Turmeric Infusion 15pc',
        image: 'https://i.ibb.co/6t92wwt/New15pc.jpg',
        cartImage: 'https://i.ibb.co/pb9fx3W/New15pc-Cart.jpg',
        price: 15.00,
        brand: 'Ravya',
        countInStock: 5,
        size: "100%",
        produtcLeft: "20px",
        headerTop: "35px",
        heroImage: '/images/productImage2.png',
        productWidth: '700px',
        // weight: '0.023'
        weight: 2.64555
    },
    {
        _id: 'Ravya-2pc',
        title: 'For Someone Special',
        name: 'Ravya Turmeric Infusion 2pc',
        image: 'https://i.ibb.co/bNGmSqb/New2pc.jpg',
        cartImage: 'https://i.ibb.co/2tQKfPS/New2pc-Cart.jpg',
        price: 4.00,
        brand: 'Ravya',
        countInStock: 5,
        size: "100%",
        headerTop: "35px",
        rightSpace: "60px",
        heroImage: '/images/productImage3.png',
        productWidth: '700px',
        // weight: '0.002'
        weight: 0.35274

    }],
    customItems: [
        // {
        //     "id": "cstitem_ab3b642ccbeb41e6a3e70237f6ab23bf",
        //     "object": "CustomsItem",
        //     "mode": "test",
        //     "created_at": "2020-10-24T14:26:02Z",
        //     "updated_at": "2020-10-24T14:26:02Z",
        //     "description": "Ravya Turmeric Infusion 25pc",
        //     "quantity": 1,
        //     "value": "20.0",
        //     "weight": 4.232,
        //     "hs_tariff_number": "610910",
        //     "origin_country": "CA"
        // },
        {
            "id": "cstitem_46880684c52042329a00b0795176375e",
            "object": "CustomsItem",
            "mode": "production",
            "created_at": "2020-11-23T19:49:40Z",
            "updated_at": "2020-11-23T19:49:40Z",
            "description": "Ravya Turmeric Infusion 20pc",
            "quantity": 500,
            "value": "20.0",
            "weight": 4.232,
            "hs_tariff_number": "610910",
            "origin_country": "CA"
        },
        // {
        //     "id": "cstitem_ad149beeef7f4d6fa17d96dc2a9f4fe5",
        //     "object": "CustomsItem",
        //     "mode": "test",
        //     "created_at": "2020-10-24T14:26:35Z",
        //     "updated_at": "2020-10-24T14:26:35Z",
        //     "description": "Ravya Turmeric Infusion 15pc",
        //     "quantity": 1,
        //     "value": "15.0",
        //     "weight": 2.645,
        //     "hs_tariff_number": "610911",
        //     "origin_country": "CA"
        // },
        {
            "id": "cstitem_7c9412156b3942c8b39be872f66e11b9",
            "object": "CustomsItem",
            "mode": "production",
            "created_at": "2020-11-23T19:24:44Z",
            "updated_at": "2020-11-23T19:24:44Z",
            "description": "Ravya Turmeric Infusion 15pc",
            "quantity": 500,
            "value": "15.0",
            "weight": 2.645,
            "hs_tariff_number": "610911",
            "origin_country": "CA"
        },
        
        //  {
        //     "id": "cstitem_cb5d9d22e7254c5d82b270a5e4ba19b9",
        //     "object": "CustomsItem",
        //     "mode": "test",
        //     "created_at": "2020-10-24T14:27:29Z",
        //     "updated_at": "2020-10-24T14:27:29Z",
        //     "description": "Ravya Turmeric Infusion 2pc",
        //     "quantity": 1,
        //     "value": "4.0",
        //     "weight": 0.352,
        //     "hs_tariff_number": "610912",
        //     "origin_country": "CA"
        // }
        {
            "id": "cstitem_f107cf7b3e7a4d95bbe18a4ec456a049",
            "object": "CustomsItem",
            "mode": "production",
            "created_at": "2020-11-23T19:23:28Z",
            "updated_at": "2020-11-23T19:23:28Z",
            "description": "Ravya Turmeric Infusion 2pc",
            "quantity": 500,
            "value": "4.0",
            "weight": 0.352,
            "hs_tariff_number": "610912",
            "origin_country": "CA"
        }
    ], 
    coupons: [
        {
            "id": "j9lc22fk",
            "object": "coupon",
            "amount_off": null,
            "created": 1604685102,
            "currency": null,
            "duration": "repeating",
            "duration_in_months": 3,
            "livemode": false,
            "max_redemptions": null,
            "metadata": {},
            "name": "25.5% off",
            "percent_off": 25,
            "redeem_by": null,
            "times_redeemed": 0,
            "valid": true
        }
    ],
    promo_codes: [
        {
            "id": "promo_1HkZmqGLtWDqx1qOGFhN5TzR",
            "object": "promotion_code",
            "active": true,
            "code": "VIPCODE",
            "coupon": {
                "id": "j9lc22fk",
                "object": "coupon",
                "amount_off": null,
                "created": 1604685102,
                "currency": null,
                "duration": "repeating",
                "duration_in_months": 3,
                "livemode": false,
                "max_redemptions": null,
                "metadata": {},
                "name": "25.5% off",
                "percent_off": 25,
                "redeem_by": null,
                "times_redeemed": 0,
                "valid": true
            },
            "created": 1604687748,
            "customer": null,
            "expires_at": null,
            "livemode": false,
            "max_redemptions": null,
            "metadata": {},
            "restrictions": {
                "first_time_transaction": false,
                "minimum_amount": null,
                "minimum_amount_currency": null
            },
            "times_redeemed": 0
        }
    ]

}