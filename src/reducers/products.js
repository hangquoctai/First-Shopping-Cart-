var initialState=[
    {
        id:1,
        name:'Iphone 7 Plus',
        image:'https://bachlongmobile.com/media/catalog/product/cache/1/image/040ec09b1e35df139433887a97daa66f/7/p/7prose.jpg',
        discription:'Sản phẩm do Appe sản xuất',
        price:400,
        rating:4,
        iventory:10
    },
    {
        id:2,
        name:'Samsung Galaxy S7',
        image:'https://www.viettablet.com/image/data/dien-thoai-samsung/samsung-galaxy-s7-edge-viettablet.png',
        discription:'Sản phẩm do Samsung sản xuất',
        price:300,
        rating:3,
        iventory:8
    },
    {
        id:3,
        name:'Oppe F3',
        image:'https://vn-test-11.slatic.net/p/2/oppo-f3-64gb-vang-hong-hang-phan-phoi-chinh-thuc-6271-6036708-c02dad408251575815590f8390581ade-catalog.jpg_340x340q80.jpg_.webp',
        discription:'Sản phẩm do China sản xuất',
        price:200,
        rating:5,
        iventory:5
    }
]
const products = (state=initialState,action) => {
    switch(action.type){
        default:return [...state];
    }
}
export default products;