//const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

export async function getNews() {
	//let result = await fetch(url).then(response => response.json());

	//return result.articles;
    return [{
        source: {
            id: '1',
            name: '汽车之家'
        },
        author: null,
        title:'汽车之家',
        description:'近日，我们从外媒获悉，法拉利812即将发布高性能版，该车型或将会被命名为“Versione Speciale”，也就是之前传闻的“812 GTO”。虽然法拉利至今没有透露该车型的任何技术细节，但是近期，法拉利官方已经给部分潜在客户看了一段关于新车的宣传视频，并且希望该车型将更加偏向于赛道化，与AMG GT Black Series等高性能车型同场竞争。据悉，新车或将在2021年的春季发布。',
        url:'https://news.16888.com/a/2021/0223/18123926.html',
        urlToImage: require('../assets/images/2021022306155733751.jpg'),
        publishedAt: '2021-02-08T07:52:57Z',
        content:'近日，我们从外媒获悉，法拉利812即将发布高性能版，该车型或将会被命名为“Versione Speciale”，也就是之前传闻的“812 GTO”。虽然法拉利至今没有透露该车型的任何技术细节，但是近期，法拉利官方已经给部分潜在客户看了一段关于新车的宣传视频，并且希望该车型将更加偏向于赛道化，与AMG GT Black Series等高性能车型同场竞争。据悉，新车或将在2021年的春季发布。',
        },
        {
            source: {
                id: '2',
                name: '凤凰新闻'
            },
            author: null,
            title:'凤凰新闻',
            description:'沃尔沃汽车有限公司（以下简称“沃尔沃汽车”）和吉利汽车控股有限公司（HK.0175）（以下简称“吉利汽车”）联合宣布：双方达成最佳合并方案。在保持各自现有独立公司架构、实现战略目标的同时，继续拓展合作领域，在汽车新四化（电气化、智能化、网联化、共享化）方面深化合作，发挥协同效应，真正实现业务整合的最大价值，强化科技优势，持续引领行业变革。',
            url:'https://auto.ifeng.com/c/848EeWj6XRI',
            urlToImage:require('../assets/images/4A8BEAC3E3D9B7B5432880FBFBD7F34411C174FC_size103_w1600_h616.jpg'),
            publishedAt: '2021-01-08T07:52:57Z',
            content:'沃尔沃汽车有限公司（以下简称“沃尔沃汽车”）和吉利汽车控股有限公司（HK.0175）（以下简称“吉利汽车”）联合宣布：双方达成最佳合并方案。在保持各自现有独立公司架构、实现战略目标的同时，继续拓展合作领域，在汽车新四化（电气化、智能化、网联化、共享化）方面深化合作，发挥协同效应，真正实现业务整合的最大价值，强化科技优势，持续引领行业变革。',
        },
        {
            source: {
                id: '3',
                name: '搜孤新闻'
            },
            author: null,
            title:'搜孤新闻',
            description:'当地时间2月24日，通用汽车首席财务官Paul Jacobson在Wolfe Research研究大会表示：“过去几周，我们一直在谈论这是一个不稳定的形势，实际上，现在我们看到形势对我们来说正有所好转。因此，我们非常有信心能够实现今年的业绩指引。',
            url:'https://www.sohu.com/a/452528567_430289',
            urlToImage:require('../assets/images/cd7c988f7d484c338308779600fe02e9.jpeg'),
            publishedAt: '2021-02-24T07:52:57Z',
            content:'当地时间2月24日，通用汽车首席财务官Paul Jacobson在Wolfe Research研究大会表示：“过去几周，我们一直在谈论这是一个不稳定的形势，实际上，现在我们看到形势对我们来说正有所好转。因此，我们非常有信心能够实现今年的业绩指引。',
        },
    ]
}