import {
    tags,
    localize_tags
} from "./modules/tags.js"
import {
    shuffle
} from "./modules/shuffle.js"
import {
    disableAll,
    enableAll
} from "./modules/ui.js"

document.getElementById('choose').innerHTML += tags.map(arg =>
    `<option value="${arg.value}" title="${arg.title}">${arg.name} | ${arg.value}</option>`).join('')

start.onclick = async function() {
    disableAll()
    document.getElementById("name").innerHTML = "寻找任务..."
    document.getElementById("rating").innerHTML = "问题评级：[上传]"
    document.getElementById("tags").innerHTML = "主题：[加载中]"
    console.log("Check inputs...")
    let min_value = document.getElementById('min_num').value,
        max_value = document.getElementById('max_num').value,
        tag_value = document.getElementById('choose').value
    if (+(min_value) < 0 || min_value == "") {
        min_value = 0
    }
    if (+(max_value) > 3800 || max_value == "") {
        max_value = 3800
    }
    if (+min_value > +max_value) {
        document.getElementById("name").innerHTML = ("最小值不能大于最大值。")
        document.getElementById("rating").innerHTML = "-____-"
        document.getElementById("tags").innerHTML = "-____-"
        console.log("Min > Max? :hmm:")
        enableAll()
        return -1
    }
    let json, link = "https://codeforces.com/api/problemset.problems?tags="
    if (tag_value != "Choose tag") {
        link += tag_value
    }
    let response = await fetch(link)
    if (response.ok) {
        console.log("Yeah, Codeforces is working...")
        document.getElementById("name").innerHTML = "剩下的已经很少了..."
        json = await response.json()
        let problems = []
        for (let i = json.result.problems.length - 1; i >= 0; i--) {
            if (min_value <= json.result.problems[i].rating && json.result.problems[i].rating <= max_value) {
                problems.push(json.result.problems[i])
            }
        }
        problems = shuffle(problems)
        if (!problems.length) {
            document.getElementById("name").innerHTML = "根据您的参数，没有任务。"
            document.getElementById("rating").innerHTML = "问题评级：:("
            document.getElementById("tags").innerHTML = "主题：:("
            console.log("Nothing... :sob:")
        } else {
            let res = problems[0]
            console.log(res)
            document.getElementById("name").innerHTML = `<a href="${"https://codeforces.com/problemset/problem/" + res.contestId + "/" + res.index}"target="_blank">${res.name}</a>`
            document.getElementById("rating").innerHTML = "发行评级：" + ((res.rating != undefined) ? res.rating : "Неизвестно")
            if (!document.getElementById('doNotShowTags').checked && res.tags.length) {
                document.getElementById("tags").innerHTML = "主题： " + res.tags.map((arg) => localize_tags(arg)).join(", ")
            } else if (!res.tags.length) {
                document.getElementById("tags").innerHTML = "没有找到此问题的主题"
            } else {
                document.getElementById("tags").innerHTML = "我们不显示主题 :D"
            }
            console.log("We did it!!!")
        }
    } else {
        document.getElementById("name").innerHTML = "HTTP 错误：" + response.status
        console.log("Codeforces is down... F")
    }
    enableAll()
}