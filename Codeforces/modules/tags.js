const tags = [{
        name: "2 - sat",
        value: "2 - sat",
        title: "2-SAT (2-satisfiability)"
    },
    {
        name: "中间相遇",
        value: "meet-in-the-middle",
        title: "Meet-in-the-middle"
    }, {
        name: "二分查找",
        value: "binary search",
        title: "Бинарный поиск"

    }, {
        name: "位掩码",
        value: "bitmasks",
        title: "Битовые маски"
    }, {
        name: "基波函数",
        value: "fft",
        title: "Быстрое преобразование Фурье"

    }, {
        name: "几何学",
        value: "geometry",
        title: "Геометрия"
    }, {
        name: "图论",
        value: "graphs",
        title: "Графы"
    }, {
        name: "双指针",
        value: "two pointers",
        title: "Два указателя"
    }, {
        name: "树",
        value: "trees",
        title: "Деревья"
    }, {
        name: "dp",
        value: "dp",
        title: "Динамическое программирование"

    }, {
        name: "贪心算法",
        value: "greedy",
        title: "Жадные алгоритмы"
    }, {
        name: "博弈论？",
        value: "games",
        title: "Игры, функция Шпрага-Гранди"
    }, {
        name: "交互式",
        value: "interactive",
        title: "Интерактивная задача"
    }, {
        name: "中国剩余定理",
        value: "chinese remainder theorem",
        title: "Китайская теорема об остатках, алгоритм Гарнера"

    }, {
        name: "组合数学",
        value: "combinatorics",
        title: "Комбинаторика"

    }, {
        name: "构造性算法",
        value: "constructive algorithms",
        title: "Конструктивные алгоритмы"

    }, {
        name: "最短路",
        value: "shortest paths",
        title: "Кратчайшие пути на графах"

    }, {
        name: "集合 扩散",
        value: "math",
        title: "Интегрирование, диффуры и др."

    }, {
        name: "矩阵",
        value: "matrices",
        title: "Произведение матриц, определитель, правило Крамера, системы линейных уравнений"
    }, {
        name: "图匹配",
        value: "graph matchings",
        title: "Паросочетания, теорема Кёнига, вершинные и реберные покрытия в двудольных графах"

    }, {
        name: "枚举",
        value: "brute force",
        title: "Перебор"

    }, {
        name: "深度优先搜索及类似",
        value: "dfs and similar",
        title: "Поиск в глубину и подобные алгоритмы"
    }, {
        name: "网络流？",
        value: "flows",
        title: "Потоки в графах"
    }, {
        name: "解析表达式",
        value: "expression parsing",
        title: "Разбор выражений"

    }, {
        name: "分治",
        value: "divide and conquer",
        title: "Разделяй и властвуй"

    }, {
        name: "调度",
        value: "schedules",
        title: "Алгоритмы теории расписаний"
    }, {
        name: "不知道是什么",
        value: "implementation",
        title: "Реализация, техника программирования, симуляция"
    }, {
        name: "dsu",
        value: "dsu",
        title: "Система непересекающихся множеств"
    }, {
        name: "排序",
        value: "sortings",
        title: "Сортировки, упорядочения"
    }, {
        name: "字符串",
        value: "strings",
        title: "Префикс- и Z-функции, суффиксные структуры, алгоритм Кнута-Морриса-Пратта и др."

    }, {
        name: "字符串后缀结构",
        value: "string suffix structures",
        title: "Суффиксные массивы, деревья и автоматы"

    }, {
        name: "数据结构",
        value: "data structures",
        title: "Кучи, деревья отрезков, деревья поиска и др."

    }, {
        name: "概率论",
        value: "probabilities",
        title: "Вероятности, мат. ожидания, случайные величины и др."

    }, {
        name: "数论",
        value: "number theory",
        title: "Теория чисел: функция Эйлера, НОД, делимость и др."

    }, {
        name: "三元查找",
        value: "ternary search",
        title: "Тернарный поиск"

    }, {
        name: "哈希",
        value: "hashing",
        title: "Хэши, хэш-таблицы"

    }
]

let localize_tags = (arg) => {
    for (let i in tags) {
        if (tags[i].value == arg) {
            return tags[i].name
        }
    }
}

export { tags, localize_tags }