
import { translations } from './translations.js';

const getInitialState = () => ({
    initialized: false,
});

let state, elements, utils;

function initialize(context) {
    state = context.state;
    elements = context.elements;
    utils = context.utils;

    if (state.makeItOrRektIt.initialized) return;

    render();
    state.makeItOrRektIt.initialized = true;
}

function render() {
    const t = translations[state.lang];
    const mainContainer = document.getElementById('make-it-or-rekt-it-main');
    if (mainContainer) {
        mainContainer.innerHTML = `
            <div class="text-center p-8 bg-slate-800/60 border border-slate-700 rounded-xl">
                 <h3 class="text-2xl font-bold text-slate-400" data-i18n-key="comingSoonTitle">${t.comingSoonTitle}</h3>
                 <p class="mt-2 text-slate-500" data-i18n-key="makeItOrRektItToolTitle">${t.makeItOrRektItToolTitle}</p>
            </div>
        `;
    }
}

export const makeItOrRektItApp = {
    initialState: getInitialState(),
    initialize: initialize,
    render: render,
};
