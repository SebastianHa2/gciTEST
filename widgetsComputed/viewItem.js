return async function (product) {
    let orderid = null
    console.log(orderid)    
    let newOrder = null
    console.log(newOrder)    
    console.log('add to cart started')
    // resets the user to force 'new user' position
    $setUser("orderid", null)
    $setUser("orderitems", {})  
    console.log($getUser("orderid"), 'user order id')
    console.log($getUser("orderitems"), 'user order items id')    
    // $setUser("orderid", $getUser('orderid'))   

    // does customer have order basket? 
    if ($getUser('orderid')){
        console.log($getUser('orderid'), 'got orderid inside the if')
        orderid = await $getUser('orderid')
        console.log(orderid)
        // $setUser("orderid", orderid) - redundant
        console.log('order exists, move to Product Details')
    } else {
        // create a new Order row - WORKS
        newOrder = await $dgAddRow('orders', {name: 'New Order Z'})
        console.log('new order being created', newOrder)
        // set user associated to order
        $setUser('orderid', newOrder)
        console.log('users orderid set')        
    }
    
    // does customer have order line for this product?
    let lines = await $getGrid('orderItems').filter(row => row.order = orderid) //filter where order = orderid
    console.log(lines, 'order line')

    if (lines.length > 0) {
        // when / if we find the order line that matches the product set the users orderLine 
        $setUser("orderitems", lines)
        // now theuser is taken to Product Detail sub-page whch should be auto-populated
        $setCurrentSubTab("-N30TmaPHDBrARyYjQBO","-N07G3mjkvV6pstp4fph")  
    }
    
    if (newOrder) {
        console.log('create new line')
        // add a new Order Item line - DOES NOT WORK
        // let newLine = await $dgAddRow('test', (rowKey) => {
        //     $setUser('orderitems', rowKey)
        //     console.log(rowKey, 'new order item created')
        // })

        console.log($getGrid('orderItems'), 'orderItems table')

        console.log(newOrder, 'new order value')

        let newLines = await $dgAddRow('orderItems', {
            bannerImage: -N154roM1YcG-GOrP-1S, // need to take field value
            dRings: $getGlobalModel('dRings'), // need to take value from the dropdown instead of a global value
            fileUpload: $getGlobalModel('fileUpload'), // need to take the field value as no globalmodel value
            grommets: $getGlobalModel('grommets'),
            gussetCorners: $getGlobalModel('gussetCorners'),            
            hemming: $getGlobalModel('hemming'),
            hemmingColor: $getGlobalModel('hemmingColor'),
            order: newOrder.toString(),
            polePocketPositions: $getGlobalModel('polePocketPositions'),
            polePockets: $getGlobalModel('polePockets'),
            price: $getGlobalModel('price'),
            priceDollars: $getGlobalModel('priceDollars'),
            product: $getGlobalModel('product'),
            quantity: 'typed in value', // need to take the field value
            size: $getGlobalModel('size'),
            turnaroundTime: $getGlobalModel('turnAroundTime'),
            velcro: $getGlobalModel('velcro'),  // need to take the field value
            webbing: $getGlobalModel('webbing'),
            windslitCount: $getGlobalModel('windslitCount'),  // need to take the field value as no globalmodel value
        })

        console.log(newLines)

        $setUser('orderitems', newLines)
   
        // console.log(newLine, 'newLine value')
        console.log(newLines, 'this order value')
    }
}

