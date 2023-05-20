


const service = [
    {icon: "fa-solid fa-code",name: "Responsive Web",text: "blog, e-commerce"},
    {icon: "fa-solid fa-display",name: "UI/UX Design",text: "Mobile app, website design"},
    {icon: "fa-solid fa-circle-exclamation",name: "Proplem & Bugs",text: "Proplem Solvin & Bugs"},
]

const price = [
    {
        name: "Bronz", 
        pric: 50, 
        text: "For most businesses that want to optimize web queries",
        work: [
            {check: true, value: "UI Design"},
            {check: true, value: "Web Development"},
            {check: false, value: "Logo design"},
            {check: false, value: "Seo optimaization"},
            {check: false, value: "WordPress integration"},
            {check: false, value: "S Page"},
            {check: false, value: "Unlimited user"},
            {check: false, value: "20 gb bandawith"},
        ]
    },

    { 
        name: "Silver", 
        pric: 100, 
        text: "For most businesses that want to optimize web queries",
        work: [
            {check: true, value: "UI Design"},
            {check: true, value: "Web Development"},
            {check: true, value: "Logo design"},
            {check: true, value: "Seo optimaization"},
            {check: true, value: "WordPress integration"},
            {check: false, value: "S Page"},
            {check: false, value: "Unlimited user"},
            {check: false, value: "20 gb bandawith"},
        ]   
    },

    {
        name: "Gold", 
        pric: 250, 
        text: "For most businesses that want to optimize web queries",
        work: [ 
            {check: true, value: "UI Design"},
            {check: true, value: "Web Development"},
            {check: true, value: "Logo design"},
            {check: true, value: "Seo optimaization"},
            {check: true, value: "WordPress integration"},
            {check: true, value: "S Page"},
            {check: true, value: "Unlimited user"},
            {check: true, value: "20 gb bandawith"},
        ]
    },
]

export default [price, service];