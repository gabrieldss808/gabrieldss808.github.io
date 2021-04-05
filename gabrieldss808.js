import { Octokit } from "https://cdn.skypack.dev/@octokit/core";

function showWindow(classText) {

    $("." + classText).show()

    $("html, body").animate({
        scrollTop: ($("." + classText).first().offset().top)
    }, 2000);
}

function closeWindows(classText) {

    $("." + classText).hide(1000);
}

function alterDataJson() {

    const octokit = new Octokit({ auth: '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' });

    const result = await octokit.request('PUT repos/gabrieldss808/gabrieldss808.github.io/contents/data/data.json', {
        owner: 'gabrieldss808',
        repo: 'gabrieldss808.github.io',
        path: 'data/data.json',
        message: 'Deu Certo',
        content: 'content'
    })
}