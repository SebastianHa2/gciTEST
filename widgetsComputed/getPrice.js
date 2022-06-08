return function (rowData){

 console.log('running')
// //first work out the base cost based on type. 
// console.log(rowData)
// let baseCost = 0

// let area = Number(rowData?.$size?.area)

// let linear = Number(rowData?.$size?.linearft)
// console.log('linearft', linear)

// // set the data model for access globally
//$setGlobalModel('product', rowData.product)
// $setGlobalModel('size', rowData.size)
// $setGlobalModel('quantity', rowData.quantity)
// $setGlobalModel('hemming', rowData.hemming)
// $setGlobalModel('hemmingColor', rowData.hemmingColor)
// $setGlobalModel('webbing', rowData.webbing)
// $setGlobalModel('drings', rowData.dRings) // doesn't do anything
// $setGlobalModel('grommets', rowData.grommets)
// $setGlobalModel('grommetPosition', rowData.grommetPosition)
// $setGlobalModel('velcro', rowData.velcro) // doesn't do anything
// $setGlobalModel('gussetCorners', rowData.gussetCorners)
// $setGlobalModel('windslitCount', rowData.windslitCount) // doesn't do anything
// $setGlobalModel('turnAroundTime', rowData.turnAroundTime)
// $setGlobalModel('bannerImage', rowData.bannerImage)
// $setGlobalModel('price', 'Price')
// $setGlobalModel('priceDollars', rowData.productCost)
// $setGlobalModel('gussetCorners', rowData.gussetCorners)
// $setGlobalModel('polePockets', rowData.polePockets)
// $setGlobalModel('polePocketPositions', rowData.polePocketPositions)


// let product = Number(rowData?.$product?.name)

// let sizeCost = Number(rowData?.$size?.cost)

// if (product == 'Black Back Banner') sizeCost = sizeCost * .8

// console.log('start', baseCost)


// if (rowData?.$hemming?.name == 'Stitching') baseCost = linear * Number(rowData?.$hemming?.linerFtCost)
// console.log('stitching', baseCost)
// //d rings 
// baseCost = baseCost + Number(rowData?.$dRings?.baseCost)
// console.log('drings',Number(rowData?.$dRings?.baseCost), baseCost)

// //grommets
// let grommetCost = 0
// grommetCost = Number(rowData?.$grommets?.linearFtCost * linear)
// baseCost = baseCost + grommetCost
// console.log('grommets',linear, grommetCost,baseCost)

// //velcro 
// baseCost = baseCost + Number(rowData?.$velcro?.linearFtCost * linear)
// console.log('velcro',Number(rowData?.$velcro?.linearFtCost * linear), baseCost)

// //gusset corners 
// baseCost = baseCost + Number(rowData?.$gussetCorners?.baseCost)
// console.log('gusset corners',Number(rowData?.$gussetCorners?.baseCost), baseCost)

// //windslit
// baseCost = baseCost + Number(rowData?.windslitCount * 5)
// console.log('windslit',Number(rowData?.windslitCount * 5), baseCost)

// //pole pockets
// baseCost = baseCost + Number(rowData?.$polePocketPositions?.polePocketCost)
// console.log('pole pocket position', Number(rowData?.$polePocketPositions?.polePocketCost), baseCost)

// let productCost = Number(rowData?.$product?.baseCost)

// let turnAroundTime = Number(rowData?.$turnaroundTime?.cost)

// return turnAroundTime + sizeCost + baseCost


}