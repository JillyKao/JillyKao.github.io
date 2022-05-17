//將所有資訊分別列出 一一去比對
const appleList = [
    {
        type:'iPad',
        name:'iPad Air',
        price:18900,
        mainImg:'/JavaScript/iphonepic/ipad-air-1.jfif',
        colorList:[
            {name:'太空灰色', color:'#B2B5B7', img:'/JavaScript/iphonepic/ipad-air-2.png'},
            {name:'銀色', color:'#DEE0DF', img:'/JavaScript/iphonepic/ipad-air-3.png'},
            {name:'綠色', color:'#CDDECA', img:'/JavaScript/iphonepic/ipad-air-4.png'},
            {name:'玫瑰金色', color:'#EBCAC3', img:'/JavaScript/iphonepic/ipad-air-5.png'},
            {name:'天藍色', color:'#C9D8E5', img:'/JavaScript/iphonepic/ipad-air-6.png'},
        ],
        spec:[
            {
                name:'儲存裝置',
                specDetails:[
                    {
                        name:'64GB',
                        fit:0
                    },
                    {
                        name:'128GB',
                        fit:5000
                    }
                ]
            },
            {
                name:'連線能力',
                specDetails:[
                    {
                        name:'Wi-Fi',
                        fit:0
                    },
                    {
                        name:'Wi-Fi + 行動網路',
                        fit:4300
                    }
                ]
            }
        ]
    },
    {
        type:'商店',
        name:' ',
    },
    {
        type:'Mac',
        name:'Mac',
    },
    {
        type:'iPhone',
        name:'iPhone',
    },
    {
        type:'Watch',
        name:' ',
    },
    {
        type:'Airpods',
        name:'Airpods',
    },
    {
        type:'TV和家庭',
        name:' ',
    },
    {
        type:'Apple獨家',
        name:' ',
    },
    {
        type:'配件',
        name:' ',
    },
    {
        type:'支援服務',
        name:' ',
    }
]
//DOM宣告
const narbar = document.querySelector('.nav-bar')
const productType = document.querySelector('.product-type')
const priceTop = document.querySelector('.price-top')
const productName = document.querySelector('.product-name')
const productImg = document.querySelector('.product-img')

const colorAreaControlBtn = document.querySelector('[aria-controls="panelsStayOpen-color"]')
const colorArea = document.querySelector('.color-area')

const accordionBox = document.querySelector('.accordion')

//window.onload
window.onload = function(){
        showNavbar()
        selectProduct(appleList[0])

    //function
    //導覽列
    function showNavbar(){
        const productList = appleList.map(x=>x.type)
        productList.forEach((ipadair, index)=>{
            const li = document.createElement('li')
            const a = document.createElement('a')

            a.innerText = ipadair
            a.href = `#${ipadair}`
            a.classList.add('btn', 'btn-dark', 'product') 
            a.onclick = function(){
                
                selectProduct(appleList[index])
            }
            li.appendChild(a)
            narbar.appendChild(li)
        })
    }

    function selectProduct(product){
        reastApple()
        productType.innerText = product.type
        productName.innerText = `購買${product.name}`
        productImg.src = product.mainImg
        priceTop.innerText = '$0'

        product.colorList.forEach((item, index)=>{
            const div = document.createElement('div')
            div.classList.add('col-6', 'mb-3')

            const btn = document.createElement('button')
            btn.setAttribute('selected', 'false')
            btn.classList.add('btn', 'color-btn', 'w-100')
            btn.onclick = function(){
                colorArea.querySelectorAll('.btn').forEach(b =>{
                    b.setAttribute('selected', 'false')
                })
                btn.setAttribute('selected', 'true')
                productImg.src = item.img
                colorAreaControlBtn.innerText = item.name
                colorAreaControlBtn.click()
            }

            const btnDiv = document.createElement('div')
            btnDiv.classList.add('py-4', 'd-flex', 'flex-column', 'justify-content-center', 'align-items-center')
            

            const i = document.createElement('i')
            i.classList.add('fas', 'fa-circle')
            i.style.color = item.color 
            const span = document.createElement('span')
            span.classList.add('color-name')
            span.innerText = item.name

            btnDiv.append(i,span)
            btn.appendChild(btnDiv)
            div.appendChild(btn)
            colorArea.appendChild(div)

        })

        //spec
        product.spec.forEach((item) => {
            const accordionItem = document.createElement('div')
            accordionItem.classList.add('accordion-item')

            const accordionTitle = document.createElement('h2')
            accordionTitle.classList.add('accordion-header')

            const accordionBtn = document.createElement('button')
            accordionBtn.innerText = item.name
            accordionBtn.classList.add('accordion-button')
            accordionBtn.setAttribute('type', 'button')
            accordionBtn.setAttribute('data-bs-toggle', 'collapse')
            accordionBtn.setAttribute('data-bs-target', `#panelsStayOpen-${item.name}`)
            accordionBtn.setAttribute('aria-expanded', 'true')
            accordionBtn.setAttribute('aria-controls', `panelsStayOpen-${item.name}`)

            accordionTitle.appendChild(accordionBtn)
            
            const accordionContent = document.createElement('div')
            accordionContent.setAttribute('id', `panelsStayOpen-${item.name}`)
            accordionContent.classList.add('accordion-collapse', 'collapse', 'show')

            const accordionBody = document.createElement('div')
            accordionBody.classList.add('accordion-body')

            const h5 = document.createElement('h5')
            const strong = document.createElement('strong')
            strong.innerText = item.name
            h5.appendChild(strong)

            const specDiv = document.createElement('div')
            specDiv.classList.add('row')

            item.specDetails.forEach((specItem) => {
                const div = document.createElement('div')
                div.classList.add('col-6', 'mb-3')

                const btn = document.createElement('button')
                btn.classList.add('btn', 'color-btn', 'w-100')
                btn.setAttribute('selected', 'false')
                btn.setAttribute('fit', specItem.fit)
                btn.onclick = function(){
                    specDiv.querySelectorAll('.btn').forEach(b=>{
                        b.setAttribute('selected', 'false')
                    })
                    btn.setAttribute('selected', 'true')
                    specDiv.setAttribute('use-fit', specItem.fit)
                    accordionBtn.innerText = specItem.name
                    accordionBtn.click()
                    showPrice(product)
                }

                const btnDiv = document.createElement('div')
                btnDiv.classList.add('py-4', 'd-flex', 'flex-column', 'justify-content-center', 'align-items-center')
            
                const p = document.createElement('p')
                p.classList.add('spec-val', 'm-0')
                p.innerText = specItem.name
                const span = document.createElement('span')
                span.classList.add('fit')
                span.innerText = `NT$${product.price + specItem.fit}起`

                btnDiv.appendChild(p)
                btnDiv.appendChild(span)
                btn.appendChild(btnDiv)
                div.appendChild(btn)
                specDiv.appendChild(div)
            })
            accordionBody.append(h5,specDiv)
            accordionContent.appendChild(accordionBody)

            accordionItem.appendChild(accordionTitle)

            accordionItem.appendChild(accordionContent)
            accordionBox.appendChild(accordionItem)
        })
    }

    function showPrice(product){
        const selectedFits = Array.from(document.querySelectorAll('[fit][selected="true"]'))
        const money = selectedFits.length > 0 ? selectedFits.map(x => parseInt(x.getAttributeNode('fit').value)).reduce((a,b)=>a+b) : 0

        handlePriceTags(money, product)

        priceTop.innerText = `$${product.price + money}起`
    }

    function reastApple(){
        colorArea.innerHTML = ''

        const removeItem = accordionBox.querySelectorAll('.accordion-item')
        if(removeItem.length > 1){
            for(let i = 1; i<removeItem.length; i++){
                accordionBox.removeChild(accordionBox.children[1])
            }
        }
    }

    function handlePriceTags(money, product){
        const priceTags = document.querySelectorAll('[fit]')
        priceTags.forEach(tag =>{
            const fit = parseInt(tag.getAttributeNode('fit').value)

            if(tag.parentNode.parentNode.getAttributeNode('use-fit') != null){
                const useFit = parseInt(tag.parentNode.parentNode.getAttributeNode('use-fit').value)
                if(fit <= useFit){
                    tag.querySelector('span').innerText = `NT$${product.price + money + fit - useFit}起`
                }else{
                    tag.querySelector('span').innerText = `NT$${product.price + money + fit}起`
                }
            }else{
                tag.querySelector('span').innerText = `NT$${product.price + money + fit}起`
            }
            
        })
    }
}
