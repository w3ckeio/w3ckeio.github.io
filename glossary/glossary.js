// global configuration
const cnf_glossary_data = "glossary.json";
const cnf_def_lang = 'ja';

// defs of global variables
let data_orig; // from cnf_glossary_data
let data_abbrs = []; // list of abbr
let data_langs = []; // list of lang

// running config
let cur_lang;

// build data_abbr, data_langs
function initDataArray() {
  data_langs = Object.keys(data_orig['languages']);
  data_abbrs = Object.keys(data_orig['entries']);
}

function refleshGlossary(sel_lang) {
  var lang_ok = 0;
  if (! data_langs.find(function(lang) {if (sel_lang == lang) {return true;}}))
  {
    console.log('Error, could not find specified lang: ' + sel_lang);
    return; // better to show error on UI
  }
  cur_lang = sel_lang;
  document.getElementById('tbody_glossary').innerHTML = '';
  Object.keys(data_orig["entries"]).forEach(function(key) {
    var trline = '';
    trline += '<tr id="' + makeIdAbbr(key) + '">';
    if (data_orig['entries'][key]['full']) {
      trline += '<td>' + key + '</td>';
      trline += '<td>' + data_orig['entries'][key]['full'] + '</td>';
    } else {
      trline += '<td colspan="2">' + key + '</td>';
    }
    if (data_orig['entries'][key]['def']) {
      trline += wrapTd('<a href="' + data_orig['entries'][key]['def'] + '">定義</a>');
    } else { trline += '<td></td>' };
    if (wrapTd(data_orig['entries'][key]['desc'][cur_lang])) {
      trline += wrapTd(data_orig['entries'][key]['desc'][cur_lang]['name']);
      trline += wrapTd(data_orig['entries'][key]['desc'][cur_lang]['desc']);
    } else {
      trline += '<td></td><td></td>';
    }
    if (data_orig['entries'][key]['link']) {
      trline += '<td>';
      for (let ino = 0; ino < data_orig['entries'][key]['link'].length; ino++) {
        if (ino > 0) { trline += ', '; }
        trline += '<a href="' + data_orig['entries'][key]['link'][ino] + '">*';
        trline += (ino + 1).toString();
        trline += '</a>';
      }
      trline += '</td>';
    } else { trline += '<td></td>' };
    trline += '</tr>';
    document.getElementById('tbody_glossary').insertAdjacentHTML('beforeend',
      trline);
  });
}

function wrapTd(in_text) {
  var td_attr = '';
  td_attr += ' lang="' + cur_lang + '"';
  td_attr += ' dir="' + data_orig['languages'][cur_lang]['dir'] + '"';
  return '<td ' + td_attr + '>' + in_text + '</td>';
}

function makeIdAbbr(abbr) {
  var tdid = 'td_';
  tdid += abbr.replace(' ', '_');
  return tdid;
}


// register
window.addEventListener('load', function(event) {
  fetch(cnf_glossary_data, {
    cache: 'no-cache', method: 'GET', redirect: 'follow'})
  .then(function(response) {
    if (response.ok) {return response.json(); }
    throw Error('Returned response for data acquire: ' + response.status);
  }).then(function(json) {
    data_orig = json;
    initDataArray();
    refleshGlossary(cnf_def_lang);
  }).catch(function(error) {
    console.log('Error found: ' + error.message);
  });
});


