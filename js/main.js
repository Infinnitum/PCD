

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Audiencia

//// Intereses de la Audiencia b=100

////// Cuadro
function start_audiencia_interes_b100_tabla(){
    var audiencia_interes_b100_tabla = [
        {"Variables": "Tráfico Total", "Musimundo": "12,567,510", "Fravega": "19,212,722", "Garbarino": "26,343,566", "Avenida": "7,736,608"},
        {"Variables": "Arte y Entretenimiento", "Musimundo": "37.5%", "Fravega": "25.1%", "Garbarino": "25.5%", "Avenida": "12.0%"},
        {"Variables": "Internet & Telcos", "Musimundo": "27.7%", "Fravega": "33.7%", "Garbarino": "23.9%", "Avenida": "14.7%"},
        {"Variables": "Shoppings", "Musimundo": "23.0%", "Fravega": "25.2%", "Garbarino": "30.9%", "Avenida": "20.9%"},
        {"Variables": "Noticias & Medios", "Musimundo": "26.0%", "Fravega": "29.1%", "Garbarino": "30.4%", "Avenida": "14.5%"},
        {"Variables": "Negocios e industrias", "Musimundo": "23.9%", "Fravega": "27.9%", "Garbarino": "30.6%", "Avenida": "17.6%"},
        {"Variables": "Computer & Electronic", "Musimundo": "35.0%", "Fravega": "27.6%", "Garbarino": "24.4%", "Avenida": "13.0%"}
    ];

    $(function () {
        $('#audiencia_interes_b100_tabla').bootstrapTable({
            data: audiencia_interes_b100_tabla,
            striped: true
        });
    });
};

////// Grafico
function start_audiencia_interes_b100_grafico(){
    nv.addGraph(function() {
        d3.select('#audiencia_interes_b100_grafico svg > *').remove();
        audiencia_interes_b100_grafico = nv.models.multiBarChart()
            .x(function(d) { return d.label })
            .rotateLabels(-45)
            .y(function(d) { return d.value })
            .yDomain([0, 50])
            .color(d3.scale.category20().range())
            .barColor(d3.scale.category20().range())
            .reduceXTicks(false)
            .duration(250)
            .margin({left: 75, right: 50, bottom: 100})
            .showControls(false)
            .useInteractiveGuideline(true);
        d3.select('#audiencia_interes_b100_grafico svg')
            .datum([{key: "Musimundo",
                     values: [{label: "Arte y Entretenimiento", value: "37.5"},
                              {label: "Internet & Telcos", value: "27.7"},
                              {label: "Shoppings", value: "23.0"},
                              {label: "Noticias & Medios", value: "26.0"},
                              {label: "Negocios e industrias", value: "23.9"},
                              {label: "Computer & Electronic", value: "35.0"}]
                    },
                    {key: "Fravega",
                     values: [{label: "Arte y Entretenimiento", value: "25.1"},
                              {label: "Internet & Telcos", value: "33.7"},
                              {label: "Shoppings", value: "25.2"},
                              {label: "Noticias & Medios", value: "29.1"},
                              {label: "Negocios e industrias", value: "27.9"},
                              {label: "Computer & Electronic", value: "27.6"}]
                    },
                    {key: "Garbarino",
                     values: [{label: "Arte y Entretenimiento", value: "25.5"},
                              {label: "Internet & Telcos", value: "23.9"},
                              {label: "Shoppings", value: "30.9"},
                              {label: "Noticias & Medios", value: "30.4"},
                              {label: "Negocios e industrias", value: "30.6"},
                              {label: "Computer & Electronic", value: "24.4"}]
                    },
                    {key: "Avenida",
                     values: [{label: "Arte y Entretenimiento", value: "12.0"},
                              {label: "Internet & Telcos", value: "14.7"},
                              {label: "Shoppings", value: "20.9"},
                              {label: "Noticias & Medios", value: "14.5"},
                              {label: "Negocios e industrias", value: "17.6"},
                              {label: "Computer & Electronic", value: "13.0"}]
                    }])
            .call(audiencia_interes_b100_grafico);
        audiencia_interes_b100_grafico.update;
        return audiencia_interes_b100_grafico;
    });
};


//// Intereses de la Audiencia

////// Cuadro
function start_audiencia_interes_tabla(){
    var audiencia_interes_tabla = [
        {"Variables": "Tráfico Total", "Musimundo": "12,567,510", "Fravega": "19,212,722", "Garbarino": "26,343,566", "Avenida": "7,736,608"},
        {"Variables": "Arte y Entretenimiento", "Musimundo": "24.0%", "Fravega": "16.3%", "Garbarino": "16.1%", "Avenida": "13.4%"},
        {"Variables": "Internet & Telcos", "Musimundo": "12.6%", "Fravega": "15.5%", "Garbarino": "10.7%", "Avenida": "11.6%"},
        {"Variables": "Shoppings", "Musimundo": "21.0%", "Fravega": "23.3%", "Garbarino": "27.8%", "Avenida": "33.2%"},
        {"Variables": "Noticias & Medios", "Musimundo": "18.6%", "Fravega": "21.0%", "Garbarino": "21.5%", "Avenida": "18.1%"},
        {"Variables": "Negocios e industrias", "Musimundo": "13.1%", "Fravega": "15.5%", "Garbarino": "16.6%", "Avenida": "16.8%"},
        {"Variables": "Computer & Electronic", "Musimundo": "10.6%", "Fravega": "8.5%", "Garbarino": "7.3%", "Avenida": "6.9%"}
    ];

    $(function () {
        $('#audiencia_interes_tabla').bootstrapTable({
            data: audiencia_interes_tabla,
            striped: true
        });
    });
};

////// Grafico
function start_audiencia_interes_grafico(){
    nv.addGraph(function() {
        d3.select('#audiencia_interes_grafico svg > *').remove();
        audiencia_interes_grafico = nv.models.multiBarChart()
            .x(function(d) { return d.label })
            .rotateLabels(-45)
            .y(function(d) { return d.value })
            .yDomain([0, 50])
            .color(d3.scale.category20().range())
            .barColor(d3.scale.category20().range())
            .reduceXTicks(false)
            .duration(250)
            .margin({left: 75, right: 50, bottom: 100})
            .showControls(false)
            .useInteractiveGuideline(true);
        d3.select('#audiencia_interes_grafico svg')
            .datum([{key: "Musimundo",
                     values: [{label: "Arte y Entretenimiento", value: "24.0"},
                              {label: "Internet & Telcos", value: "12.6"},
                              {label: "Shoppings", value: "21.0"},
                              {label: "Noticias & Medios", value: "18.6"},
                              {label: "Negocios e industrias", value: "13.1"},
                              {label: "Computer & Electronic", value: "10.6"}]
                    },
                    {key: "Fravega",
                     values: [{label: "Arte y Entretenimiento", value: "16.3"},
                              {label: "Internet & Telcos", value: "15.5"},
                              {label: "Shoppings", value: "23.3"},
                              {label: "Noticias & Medios", value: "21.0"},
                              {label: "Negocios e industrias", value: "15.5"},
                              {label: "Computer & Electronic", value: "8.5"}]
                    },
                    {key: "Garbarino",
                     values: [{label: "Arte y Entretenimiento", value: "16.1"},
                              {label: "Internet & Telcos", value: "10.7"},
                              {label: "Shoppings", value: "27.8"},
                              {label: "Noticias & Medios", value: "21.5"},
                              {label: "Negocios e industrias", value: "16.6"},
                              {label: "Computer & Electronic", value: "7.3"}]
                    },
                    {key: "Avenida",
                     values: [{label: "Arte y Entretenimiento", value: "13.4"},
                              {label: "Internet & Telcos", value: "11.6"},
                              {label: "Shoppings", value: "33.2"},
                              {label: "Noticias & Medios", value: "18.1"},
                              {label: "Negocios e industrias", value: "16.8"},
                              {label: "Computer & Electronic", value: "6.9"}]
                    }])
            .call(audiencia_interes_grafico);
        audiencia_interes_grafico.update;
        return audiencia_interes_grafico;
    });
};


//// Intereses de la Audiencia por Industria

//// Arte_Entretenimiento

////// Sitios
function start_audiencia_Arte_Entretenimiento_sites(){
    var audiencia_Arte_Entretenimiento_sites = [
        {"Sitio": "youtube.com", "Pos": "1"},
        {"Sitio": "netflix.com", "Pos": "2"},
        {"Sitio": "directv.com.ar", "Pos": "3"},
        {"Sitio": "ciudad.com.ar", "Pos": "4"},
        {"Sitio": "upsocl.com", "Pos": "5"},
        {"Sitio": "entertainment-factory.com", "Pos": "6"},
        {"Sitio": "musica.com", "Pos": "7"},
        {"Sitio": "cienradios.com", "Pos": "8"},
        {"Sitio": "media-fire.org", "Pos": "9"},
        {"Sitio": "eltrecetv.com.ar", "Pos": "10"},
        {"Sitio": "cuevana2.tv", "Pos": "11"},
        {"Sitio": "youtube-mp3.org", "Pos": "12"},
        {"Sitio": "repelis.tv", "Pos": "13"},
        {"Sitio": "pelis24.com", "Pos": "14"},
        {"Sitio": "imdb.com", "Pos": "15"},
        {"Sitio": "miradetodo.com.ar", "Pos": "16"},
        {"Sitio": "telefe.com", "Pos": "17"},
        {"Sitio": "pronto.com.ar", "Pos": "18"},
        {"Sitio": "primiciasya.com", "Pos": "19"},
        {"Sitio": "lacuerda.net", "Pos": "20"},
        {"Sitio": "animeflv.net", "Pos": "21"},
        {"Sitio": "ratingcero.com", "Pos": "22"},
        {"Sitio": "deviantart.com", "Pos": "23"},
        {"Sitio": "dailymotion.com", "Pos": "24"},
        {"Sitio": "jkanime.net", "Pos": "25"},
        {"Sitio": "spotify.com", "Pos": "26"},
        {"Sitio": "batanga.com", "Pos": "27"},
        {"Sitio": "seriesflv.net", "Pos": "28"},
        {"Sitio": "cadena3.com", "Pos": "29"},
        {"Sitio": "sintelevisor.com", "Pos": "30"}
    ];

    $(function () {
        $('#audiencia_Arte_Entretenimiento_sites').bootstrapTable({
            data: audiencia_Arte_Entretenimiento_sites,
            striped: true
        });
    });
};

////// Tabla - Musimundo
function start_audiencia_Arte_Entretenimiento_musimundo_tabla(){
    var audiencia_Arte_Entretenimiento_musimundo_tabla = [
        {"Empresa": "Musimundo", "ShareAudiencia": "24.0%", "Shareb100": "37.5%"}
    ];

    $(function () {
        $('#audiencia_Arte_Entretenimiento_musimundo_tabla').bootstrapTable({
            data: audiencia_Arte_Entretenimiento_musimundo_tabla,
            striped: true
        });
    });
};

////// Grafico - Musimundo
function start_audiencia_Arte_Entretenimiento_musimundo_wordcloud(){
    var words = [["Hello", 150], ["world", 40], ["normally", 30], ["you", 120], ["want", 15], ["more", 12], ["words", 8], ["than", 5], ["this", 3]];
    WordCloud(document.getElementById('audiencia_Arte_Entretenimiento_musimundo_wordcloud'), { list: words, rotateRatio: 0, minRotation: 0, maxRotation: 0 });
};

////// Tabla - Garbarino
function start_audiencia_Arte_Entretenimiento_garbarino_tabla(){
    var audiencia_Arte_Entretenimiento_garbarino_tabla = [
        {"Empresa": "Garbarino", "ShareAudiencia": "16.1%", "Shareb100": "25.5%"}
    ];

    $(function () {
        $('#audiencia_Arte_Entretenimiento_garbarino_tabla').bootstrapTable({
            data: audiencia_Arte_Entretenimiento_garbarino_tabla,
            striped: true
        });
    });
};

////// Grafico - Garbarino
function start_audiencia_Arte_Entretenimiento_garbarino_wordcloud(){
    var words = [["Hello", 150], ["world", 40], ["normally", 30], ["you", 120], ["want", 15], ["more", 12], ["words", 8], ["than", 5], ["this", 3]];
    WordCloud(document.getElementById('audiencia_Arte_Entretenimiento_garbarino_wordcloud'), { list: words, rotateRatio: 0, minRotation: 0, maxRotation: 0 });
};

////// Tabla - Fravega
function start_audiencia_Arte_Entretenimiento_fravega_tabla(){
    var audiencia_Arte_Entretenimiento_fravega_tabla = [
        {"Empresa": "Fravega", "ShareAudiencia": "16.3%", "Shareb100": "25.1%"}
    ];

    $(function () {
        $('#audiencia_Arte_Entretenimiento_fravega_tabla').bootstrapTable({
            data: audiencia_Arte_Entretenimiento_fravega_tabla,
            striped: true
        });
    });
};

////// Grafico - Fravega
function start_audiencia_Arte_Entretenimiento_fravega_wordcloud(){
    var words = [["Hello", 150], ["world", 40], ["normally", 30], ["you", 120], ["want", 15], ["more", 12], ["words", 8], ["than", 5], ["this", 3]];
    WordCloud(document.getElementById('audiencia_Arte_Entretenimiento_fravega_wordcloud'), { list: words, rotateRatio: 0, minRotation: 0, maxRotation: 0 });
};

////// Tabla - Avenida
function start_audiencia_Arte_Entretenimiento_avenida_tabla(){
    var audiencia_Arte_Entretenimiento_avenida_tabla = [
        {"Empresa": "Avenida", "ShareAudiencia": "13.4%", "Shareb100": "12.0%"}
    ];

    $(function () {
        $('#audiencia_Arte_Entretenimiento_avenida_tabla').bootstrapTable({
            data: audiencia_Arte_Entretenimiento_avenida_tabla,
            striped: true
        });
    });
};

////// Grafico - Avenida
function start_audiencia_Arte_Entretenimiento_avenida_wordcloud(){
    var words = [["Hello", 150], ["world", 40], ["normally", 30], ["you", 120], ["want", 15], ["more", 12], ["words", 8], ["than", 5], ["this", 3]];
    WordCloud(document.getElementById('audiencia_Arte_Entretenimiento_avenida_wordcloud'), { list: words, rotateRatio: 0, minRotation: 0, maxRotation: 0 });
};

//// Internet_Telcos

////// Sitios
function start_audiencia_Internet_Telcos_sites(){
    var audiencia_Internet_Telcos_sites = [
        {"Sitio": "facebook.com", "Pos": "1"},
        {"Sitio": "google.com.ar", "Pos": "2"},
        {"Sitio": "google.com", "Pos": "3"},
        {"Sitio": "live.com", "Pos": "4"},
        {"Sitio": "twitter.com", "Pos": "5"},
        {"Sitio": "instagram.com", "Pos": "6"},
        {"Sitio": "youradexchange.com", "Pos": "7"},
        {"Sitio": "ask.com", "Pos": "8"},
        {"Sitio": "iminent.com", "Pos": "9"},
        {"Sitio": "taringa.net", "Pos": "10"},
        {"Sitio": "adcash.com", "Pos": "11"},
        {"Sitio": "onclickads.net", "Pos": "12"},
        {"Sitio": "google.es", "Pos": "13"},
        {"Sitio": "bing.com", "Pos": "14"},
        {"Sitio": "pinterest.com", "Pos": "15"},
        {"Sitio": "delta-homes.com", "Pos": "16"},
        {"Sitio": "wordpress.com", "Pos": "17"},
        {"Sitio": "adf.ly", "Pos": "18"},
        {"Sitio": "t.co", "Pos": "19"},
        {"Sitio": "ampclicks.com", "Pos": "20"},
        {"Sitio": "claro.com.ar", "Pos": "21"},
        {"Sitio": "ad4game.com", "Pos": "22"},
        {"Sitio": "tumblr.com", "Pos": "23"},
        {"Sitio": "personal.com.ar", "Pos": "24"},
        {"Sitio": "linkedin.com", "Pos": "25"},
        {"Sitio": "gmail.com", "Pos": "26"},
        {"Sitio": "adplxmd.com", "Pos": "27"},
        {"Sitio": "webssearches.com", "Pos": "28"},
        {"Sitio": "v9.com", "Pos": "29"},
        {"Sitio": "mediafire.com", "Pos": "30"}
    ];

    $(function () {
        $('#audiencia_Internet_Telcos_sites').bootstrapTable({
            data: audiencia_Internet_Telcos_sites,
            striped: true
        });
    });
};

////// Tabla - Musimundo
function start_audiencia_Internet_Telcos_musimundo_tabla(){
    var audiencia_Internet_Telcos_musimundo_tabla = [
        {"Empresa": "Musimundo", "ShareAudiencia": "12.6%", "Shareb100": "27.7%"}
    ];

    $(function () {
        $('#audiencia_Internet_Telcos_musimundo_tabla').bootstrapTable({
            data: audiencia_Internet_Telcos_musimundo_tabla,
            striped: true
        });
    });
};

////// Grafico - Musimundo
function start_audiencia_Internet_Telcos_musimundo_wordcloud(){
    var words = [["Hello", 150], ["world", 40], ["normally", 30], ["you", 120], ["want", 15], ["more", 12], ["words", 8], ["than", 5], ["this", 3]];
    WordCloud(document.getElementById('audiencia_Internet_Telcos_musimundo_wordcloud'), { list: words, rotateRatio: 0, minRotation: 0, maxRotation: 0 });
};

////// Tabla - Garbarino
function start_audiencia_Internet_Telcos_garbarino_tabla(){
    var audiencia_Internet_Telcos_garbarino_tabla = [
        {"Empresa": "Garbarino", "ShareAudiencia": "10.7%", "Shareb100": "23.9%"}
    ];

    $(function () {
        $('#audiencia_Internet_Telcos_garbarino_tabla').bootstrapTable({
            data: audiencia_Internet_Telcos_garbarino_tabla,
            striped: true
        });
    });
};

////// Grafico - Garbarino
function start_audiencia_Internet_Telcos_garbarino_wordcloud(){
    var words = [["Hello", 150], ["world", 40], ["normally", 30], ["you", 120], ["want", 15], ["more", 12], ["words", 8], ["than", 5], ["this", 3]];
    WordCloud(document.getElementById('audiencia_Internet_Telcos_garbarino_wordcloud'), { list: words, rotateRatio: 0, minRotation: 0, maxRotation: 0 });
};

////// Tabla - Fravega
function start_audiencia_Internet_Telcos_fravega_tabla(){
    var audiencia_Internet_Telcos_fravega_tabla = [
        {"Empresa": "Fravega", "ShareAudiencia": "15.5%", "Shareb100": "33.7%"}
    ];

    $(function () {
        $('#audiencia_Internet_Telcos_fravega_tabla').bootstrapTable({
            data: audiencia_Internet_Telcos_fravega_tabla,
            striped: true
        });
    });
};

////// Grafico - Fravega
function start_audiencia_Internet_Telcos_fravega_wordcloud(){
    var words = [["Hello", 150], ["world", 40], ["normally", 30], ["you", 120], ["want", 15], ["more", 12], ["words", 8], ["than", 5], ["this", 3]];
    WordCloud(document.getElementById('audiencia_Internet_Telcos_fravega_wordcloud'), { list: words, rotateRatio: 0, minRotation: 0, maxRotation: 0 });
};

////// Tabla - Avenida
function start_audiencia_Internet_Telcos_avenida_tabla(){
    var audiencia_Internet_Telcos_avenida_tabla = [
        {"Empresa": "Avenida", "ShareAudiencia": "11.6%", "Shareb100": "14.7%"}
    ];

    $(function () {
        $('#audiencia_Internet_Telcos_avenida_tabla').bootstrapTable({
            data: audiencia_Internet_Telcos_avenida_tabla,
            striped: true
        });
    });
};

////// Grafico - Avenida
function start_audiencia_Internet_Telcos_avenida_wordcloud(){
    var words = [["Hello", 150], ["world", 40], ["normally", 30], ["you", 120], ["want", 15], ["more", 12], ["words", 8], ["than", 5], ["this", 3]];
    WordCloud(document.getElementById('audiencia_Internet_Telcos_avenida_wordcloud'), { list: words, rotateRatio: 0, minRotation: 0, maxRotation: 0 });
};

//// Shoppings

////// Sitios
function start_audiencia_Shoppings_sites(){
    var audiencia_Shoppings_sites = [
        {"Sitio": "mercadolibre.com.ar", "Pos": "1"},
        {"Sitio": "alamaula.com", "Pos": "2"},
        {"Sitio": "linio.com.ar", "Pos": "3"},
        {"Sitio": "aliexpress.com", "Pos": "4"},
        {"Sitio": "olx.com.ar", "Pos": "5"},
        {"Sitio": "auto.mercadolibre.com.ar", "Pos": "6"},
        {"Sitio": "alibaba.com", "Pos": "7"},
        {"Sitio": "amazon.com", "Pos": "8"},
        {"Sitio": "mercadolibre.com", "Pos": "9"},
        {"Sitio": "netshoes.com.ar", "Pos": "10"},
        {"Sitio": "ebay.com", "Pos": "11"},
        {"Sitio": "garbarino.com", "Pos": "12"},
        {"Sitio": "fravega.com", "Pos": "13"},
        {"Sitio": "groupon.com.ar", "Pos": "14"},
        {"Sitio": "dafiti.com.ar", "Pos": "15"},
        {"Sitio": "musimundo.com", "Pos": "16"},
        {"Sitio": "falabella.com.ar", "Pos": "17"},
        {"Sitio": "easy.com.ar", "Pos": "18"},
        {"Sitio": "imgga.com", "Pos": "19"},
        {"Sitio": "moto.mercadolibre.com.ar", "Pos": "20"},
        {"Sitio": "vivavisos.com.ar", "Pos": "21"},
        {"Sitio": "smartshopping.com", "Pos": "22"},
        {"Sitio": "solarinstructions.com", "Pos": "23"},
        {"Sitio": "carrefour.com.ar", "Pos": "24"},
        {"Sitio": "cordobavende.com", "Pos": "25"},
        {"Sitio": "trovitargentina.com.ar", "Pos": "26"},
        {"Sitio": "futbolparatodos.com.ar", "Pos": "27"},
        {"Sitio": "clasificadoslavoz.com.ar", "Pos": "28"},
        {"Sitio": "tiendamovistar.com.ar", "Pos": "29"},
        {"Sitio": "navegaki.com", "Pos": "30"}
    ];

    $(function () {
        $('#audiencia_Shoppings_sites').bootstrapTable({
            data: audiencia_Shoppings_sites,
            striped: true
        });
    });
};

////// Tabla - Musimundo
function start_audiencia_Shoppings_musimundo_tabla(){
    var audiencia_Shoppings_musimundo_tabla = [
        {"Empresa": "Musimundo", "ShareAudiencia": "21.0%", "Shareb100": "23.0%"}
    ];

    $(function () {
        $('#audiencia_Shoppings_musimundo_tabla').bootstrapTable({
            data: audiencia_Shoppings_musimundo_tabla,
            striped: true
        });
    });
};

////// Grafico - Musimundo
function start_audiencia_Shoppings_musimundo_wordcloud(){
    var words = [["Hello", 150], ["world", 40], ["normally", 30], ["you", 120], ["want", 15], ["more", 12], ["words", 8], ["than", 5], ["this", 3]];
    WordCloud(document.getElementById('audiencia_Shoppings_musimundo_wordcloud'), { list: words, rotateRatio: 0, minRotation: 0, maxRotation: 0 });
};

////// Tabla - Garbarino
function start_audiencia_Shoppings_garbarino_tabla(){
    var audiencia_Shoppings_garbarino_tabla = [
        {"Empresa": "Garbarino", "ShareAudiencia": "27.8%", "Shareb100": "30.9%"}
    ];

    $(function () {
        $('#audiencia_Shoppings_garbarino_tabla').bootstrapTable({
            data: audiencia_Shoppings_garbarino_tabla,
            striped: true
        });
    });
};

////// Grafico - Garbarino
function start_audiencia_Shoppings_garbarino_wordcloud(){
    var words = [["Hello", 150], ["world", 40], ["normally", 30], ["you", 120], ["want", 15], ["more", 12], ["words", 8], ["than", 5], ["this", 3]];
    WordCloud(document.getElementById('audiencia_Shoppings_garbarino_wordcloud'), { list: words, rotateRatio: 0, minRotation: 0, maxRotation: 0 });
};

////// Tabla - Fravega
function start_audiencia_Shoppings_fravega_tabla(){
    var audiencia_Shoppings_fravega_tabla = [
        {"Empresa": "Fravega", "ShareAudiencia": "23.3%", "Shareb100": "25.2%"}
    ];

    $(function () {
        $('#audiencia_Shoppings_fravega_tabla').bootstrapTable({
            data: audiencia_Shoppings_fravega_tabla,
            striped: true
        });
    });
};

////// Grafico - Fravega
function start_audiencia_Shoppings_fravega_wordcloud(){
    var words = [["Hello", 150], ["world", 40], ["normally", 30], ["you", 120], ["want", 15], ["more", 12], ["words", 8], ["than", 5], ["this", 3]];
    WordCloud(document.getElementById('audiencia_Shoppings_fravega_wordcloud'), { list: words, rotateRatio: 0, minRotation: 0, maxRotation: 0 });
};

////// Tabla - Avenida
function start_audiencia_Shoppings_avenida_tabla(){
    var audiencia_Shoppings_avenida_tabla = [
        {"Empresa": "Avenida", "ShareAudiencia": "33.2%", "Shareb100": "20.9%"}
    ];

    $(function () {
        $('#audiencia_Shoppings_avenida_tabla').bootstrapTable({
            data: audiencia_Shoppings_avenida_tabla,
            striped: true
        });
    });
};

////// Grafico - Avenida
function start_audiencia_Shoppings_avenida_wordcloud(){
    var words = [["Hello", 150], ["world", 40], ["normally", 30], ["you", 120], ["want", 15], ["more", 12], ["words", 8], ["than", 5], ["this", 3]];
    WordCloud(document.getElementById('audiencia_Shoppings_avenida_wordcloud'), { list: words, rotateRatio: 0, minRotation: 0, maxRotation: 0 });
};

//// Noticias_Medios

////// Sitios
function start_audiencia_Noticias_Medios_sites(){
    var audiencia_Noticias_Medios_sites = [
        {"Sitio": "yahoo.com", "Pos": "1"},
        {"Sitio": "msn.com", "Pos": "2"},
        {"Sitio": "clarin.com", "Pos": "3"},
        {"Sitio": "lanacion.com.ar", "Pos": "4"},
        {"Sitio": "infobae.com", "Pos": "5"},
        {"Sitio": "ole.com.ar", "Pos": "6"},
        {"Sitio": "tn.com.ar", "Pos": "7"},
        {"Sitio": "minutouno.com", "Pos": "8"},
        {"Sitio": "perfil.com", "Pos": "9"},
        {"Sitio": "lavoz.com.ar", "Pos": "10"},
        {"Sitio": "diarioregistrado.com", "Pos": "11"},
        {"Sitio": "diariouno.com.ar", "Pos": "12"},
        {"Sitio": "lacapital.com.ar", "Pos": "13"},
        {"Sitio": "losandes.com.ar", "Pos": "14"},
        {"Sitio": "ambito.com", "Pos": "15"},
        {"Sitio": "pagina12.com.ar", "Pos": "16"},
        {"Sitio": "mdzol.com", "Pos": "17"},
        {"Sitio": "lagaceta.com.ar", "Pos": "18"},
        {"Sitio": "infonews.com", "Pos": "19"},
        {"Sitio": "elintransigente.com", "Pos": "20"},
        {"Sitio": "bp.blogspot.com", "Pos": "21"},
        {"Sitio": "cronista.com", "Pos": "22"},
        {"Sitio": "rionegro.com.ar", "Pos": "23"},
        {"Sitio": "eldia.com", "Pos": "24"},
        {"Sitio": "diariodecuyo.com.ar", "Pos": "25"},
        {"Sitio": "bamzum.com", "Pos": "26"},
        {"Sitio": "telam.com.ar", "Pos": "27"},
        {"Sitio": "eltribuno.info", "Pos": "28"},
        {"Sitio": "cnet.com", "Pos": "29"},
        {"Sitio": "elpais.com", "Pos": "30"}
    ];

    $(function () {
        $('#audiencia_Noticias_Medios_sites').bootstrapTable({
            data: audiencia_Noticias_Medios_sites,
            striped: true
        });
    });
};

////// Tabla - Musimundo
function start_audiencia_Noticias_Medios_musimundo_tabla(){
    var audiencia_Noticias_Medios_musimundo_tabla = [
        {"Empresa": "Musimundo", "ShareAudiencia": "18.6%", "Shareb100": "26.0%"}
    ];

    $(function () {
        $('#audiencia_Noticias_Medios_musimundo_tabla').bootstrapTable({
            data: audiencia_Noticias_Medios_musimundo_tabla,
            striped: true
        });
    });
};

////// Grafico - Musimundo
function start_audiencia_Noticias_Medios_musimundo_wordcloud(){
    var words = [["Hello", 150], ["world", 40], ["normally", 30], ["you", 120], ["want", 15], ["more", 12], ["words", 8], ["than", 5], ["this", 3]];
    WordCloud(document.getElementById('audiencia_Noticias_Medios_musimundo_wordcloud'), { list: words, rotateRatio: 0, minRotation: 0, maxRotation: 0 });
};

////// Tabla - Garbarino
function start_audiencia_Noticias_Medios_garbarino_tabla(){
    var audiencia_Noticias_Medios_garbarino_tabla = [
        {"Empresa": "Garbarino", "ShareAudiencia": "21.5%", "Shareb100": "30.4%"}
    ];

    $(function () {
        $('#audiencia_Noticias_Medios_garbarino_tabla').bootstrapTable({
            data: audiencia_Noticias_Medios_garbarino_tabla,
            striped: true
        });
    });
};

////// Grafico - Garbarino
function start_audiencia_Noticias_Medios_garbarino_wordcloud(){
    var words = [["Hello", 150], ["world", 40], ["normally", 30], ["you", 120], ["want", 15], ["more", 12], ["words", 8], ["than", 5], ["this", 3]];
    WordCloud(document.getElementById('audiencia_Noticias_Medios_garbarino_wordcloud'), { list: words, rotateRatio: 0, minRotation: 0, maxRotation: 0 });
};

////// Tabla - Fravega
function start_audiencia_Noticias_Medios_fravega_tabla(){
    var audiencia_Noticias_Medios_fravega_tabla = [
        {"Empresa": "Fravega", "ShareAudiencia": "21.0%", "Shareb100": "29.1%"}
    ];

    $(function () {
        $('#audiencia_Noticias_Medios_fravega_tabla').bootstrapTable({
            data: audiencia_Noticias_Medios_fravega_tabla,
            striped: true
        });
    });
};

////// Grafico - Fravega
function start_audiencia_Noticias_Medios_fravega_wordcloud(){
    var words = [["Hello", 150], ["world", 40], ["normally", 30], ["you", 120], ["want", 15], ["more", 12], ["words", 8], ["than", 5], ["this", 3]];
    WordCloud(document.getElementById('audiencia_Noticias_Medios_fravega_wordcloud'), { list: words, rotateRatio: 0, minRotation: 0, maxRotation: 0 });
};

////// Tabla - Avenida
function start_audiencia_Noticias_Medios_avenida_tabla(){
    var audiencia_Noticias_Medios_avenida_tabla = [
        {"Empresa": "Avenida", "ShareAudiencia": "18.1%", "Shareb100": "14.5%"}
    ];

    $(function () {
        $('#audiencia_Noticias_Medios_avenida_tabla').bootstrapTable({
            data: audiencia_Noticias_Medios_avenida_tabla,
            striped: true
        });
    });
};

////// Grafico - Avenida
function start_audiencia_Noticias_Medios_avenida_wordcloud(){
    var words = [["Hello", 150], ["world", 40], ["normally", 30], ["you", 120], ["want", 15], ["more", 12], ["words", 8], ["than", 5], ["this", 3]];
    WordCloud(document.getElementById('audiencia_Noticias_Medios_avenida_wordcloud'), { list: words, rotateRatio: 0, minRotation: 0, maxRotation: 0 });
};


//// Audiencia Sitios

////// Cuadro
function start_audiencia_sitios_ranking_tabla(){
    var audiencia_sitios_ranking_tabla = [
        {"Pos": "1", "Musimundo": "fravega.com", "Fravega": "musimundo.com", "Garbarino": "fravega.com", "Avenida": "avalancha.com.ar"},
        {"Pos": "2", "Musimundo": "garbarino.com", "Fravega": "garbarino.com", "Garbarino": "musimundo.com", "Avenida": "musimundo.com"},
        {"Pos": "3", "Musimundo": "compumundo.com.ar", "Fravega": "tiendeo.com.ar", "Garbarino": "compumundo.com.ar", "Avenida": "ar.ask.com"},
        {"Pos": "4", "Musimundo": "marcaderadio.com", "Fravega": "compumundo.com.ar", "Garbarino": "ribeiro.com.ar", "Avenida": "electropuntonet.com"},
        {"Pos": "5", "Musimundo": "tiendeo.com.ar", "Fravega": "falabella.com.ar", "Garbarino": "rodo.com.ar", "Avenida": "groupon.com.ar"},
        {"Pos": "6", "Musimundo": "cetrogar.com.ar", "Fravega": "ribeiro.com.ar", "Garbarino": "falabella.com.ar", "Avenida": "monetizadesdecasa.xyz"},
        {"Pos": "7", "Musimundo": "megatone.net", "Fravega": "appnew.embluejet.com", "Garbarino": "ads01.groovinads.com", "Avenida": "garbarino.com"},
        {"Pos": "8", "Musimundo": "falabella.com.ar", "Fravega": "rodo.com.ar", "Garbarino": "tiomusa.com.ar", "Avenida": "muebleriamam.com.ar"},
        {"Pos": "9", "Musimundo": "ribeiro.com.ar", "Fravega": "naldo.com.ar", "Garbarino": "siam.com.ar", "Avenida": "hoyts.com.ar"},
        {"Pos": "10", "Musimundo": "easy.com.ar", "Fravega": "cetrogar.com.ar", "Garbarino": "tiendeo.com.ar", "Avenida": "ar.zapmeta.com"},
        {"Pos": "11", "Musimundo": "sf.grupocarsa.com", "Fravega": "ads01.groovinads.com", "Garbarino": "carrefour.com.ar", "Avenida": "infoplanett.com"},
        {"Pos": "12", "Musimundo": "tusjuegosonline.info", "Fravega": "store.sony.com.ar", "Garbarino": "lt.mydplr.com", "Avenida": "tiendeo.com.ar"},
        {"Pos": "13", "Musimundo": "wal-mart.com.ar", "Fravega": "ofertas.mercadolibre.com.ar", "Garbarino": "naldo.com.ar", "Avenida": "proyectocartele.com"},
        {"Pos": "14", "Musimundo": "conlasdeforex.co", "Fravega": "tienda.personal.com.ar", "Garbarino": "gosquared.com", "Avenida": "ventas-privadas.com"},
        {"Pos": "15", "Musimundo": "casadelaudio.com", "Fravega": "televisores.mercadolibre.com.ar", "Garbarino": "cetrogar.com.ar", "Avenida": "buenosaireshockey.org.ar"},
        {"Pos": "16", "Musimundo": "crackle.com", "Fravega": "fravegacatalogo.com", "Garbarino": "castilloweb.com.ar", "Avenida": "gurudeofertas.com"},
        {"Pos": "17", "Musimundo": "electronica.mercadolibre.com.ar", "Fravega": "casadelaudio.com", "Garbarino": "hb.hipotecario.com.ar", "Avenida": "rtbhousesalatam.pipedrive.com"},
        {"Pos": "18", "Musimundo": "docs.opendns.com", "Fravega": "garbarinocatalogo.com", "Garbarino": "appsec.claro.com.ar", "Avenida": "oldpicsarchive.com"},
        {"Pos": "19", "Musimundo": "carrefour.com.ar", "Fravega": "whirlpool.com.ar", "Garbarino": "lucaioli.com.ar", "Avenida": "buildingco.slack.com"},
        {"Pos": "20", "Musimundo": "webmasterworkers.com", "Fravega": "infantiladas.info", "Garbarino": "store.sony.com.ar", "Avenida": "rosarioalcosto.com"},
        {"Pos": "21", "Musimundo": "ar.ask.com", "Fravega": "red.videoschistososs.com", "Garbarino": "apps.tekgenesis.com", "Avenida": "todobd25.com"},
        {"Pos": "22", "Musimundo": "compu-santafe.com.ar", "Fravega": "ar-mg5.mail.yahoo.com", "Garbarino": "electropuntonet.com", "Avenida": "mardelplata.olx.com.ar"},
        {"Pos": "23", "Musimundo": "sanyo.com..ar", "Fravega": "ecomer-divisa.info", "Garbarino": "mega-descarga.com", "Avenida": "capitalfederal-gba.olx.com.ar"},
        {"Pos": "24", "Musimundo": "tienda.personal.com.ar", "Fravega": "sear4m.xyz", "Garbarino": "electronica.mercadolibre.com.ar", "Avenida": "falabella.com.ar"},
        {"Pos": "25", "Musimundo": "pequenaempresas.info", "Fravega": "segundoenfoque.com", "Garbarino": "gamaitaly.com", "Avenida": "ar-mg5.mail.yahoo.com"},
        {"Pos": "26", "Musimundo": "bazarelentrerriano.com.ar", "Fravega": "forexmbanotici.com", "Garbarino": "ar.ask.com", "Avenida": "acool.com"},
        {"Pos": "27", "Musimundo": "gsmversus.com", "Fravega": "telefonia.mercadolibre.com.ar", "Garbarino": "alamaula.com", "Avenida": "aveda.com"},
        {"Pos": "28", "Musimundo": "coppel.com.ar", "Fravega": "tododvdfull.com", "Garbarino": "walmartonline.com.ar", "Avenida": "fravega.com"},
        {"Pos": "29", "Musimundo": "novogar.com.ar", "Fravega": "jumbo.com.ar", "Garbarino": "ar.zapmeta.com", "Avenida": "consejo.org.ar"},
        {"Pos": "30", "Musimundo": "rosariofinanzas.com.ar", "Fravega": "personal.com.ar", "Garbarino": "consejo.org.ar", "Avenida": "webmail.ciudad.com.ar"}
    ];

    $(function () {
        $('#audiencia_sitios_ranking_tabla').bootstrapTable({
            data: audiencia_sitios_ranking_tabla,
            striped: true
        });
    });
};


////// Grafico
function start_audiencia_industrias_grafico(){
    var labels = ["Mayo", "Julio", "Sept", "Nov", "Ene"];
    
    nv.addGraph(function() {
        d3.select('#audiencia_industrias_grafico svg > *').remove();
        audiencia_industrias_grafico = nv.models.lineChart()
            .x(function(d) { return d.label /*d3.time.format('%Y-%m-%d').parse(d.label)*/ })
            .xScale(d3.time.scale())
            .valueFormat(d3.time.format("%b %Y"))
            //.tickFormat(d3.time.format("%b %Y"));
            //.xAxis.tickValues([0, 1, 2, 3, 4]).tickFormat(function(d){return labels[d]})
            //.xAxis: {tickFormat: function(d){return d3.time.format('%d/%m')(new Date(d));}}
            .y(function(d) { return d.value })
            .yDomain([0, 50])
            .duration(250)
            .margin({left: 75, right: 50, bottom: 100})
            .color(d3.scale.category20().range())
            .useInteractiveGuideline(true)
            //.tickValues([0, 1, 2, 3, 4])
            //.tickFormat(function(d){ return labels[d]})
            //.showControls(false)
            //.reduceXTicks(false)
            ;
    
        /*
2015-05-01
2015-07-01
2015-09-01
2015-11-01
2016-01-01

new Date(2015, 5,1)
new Date(2015, 7,1)
new Date(2015, 9,1)
new Date(2015,11,1)
new Date(2016, 1,1)
*/
        
        d3.select('#audiencia_industrias_grafico svg')
            .datum([{key: "Arte y Entretenimiento",
                     values: [{label: new Date(2015, 4,1), value: "20.0"},
                              {label: new Date(2015, 6,1), value: "22.2"},
                              {label: new Date(2015, 8,1), value: "21.7"},
                              {label: new Date(2015,10,1), value: "19.7"},
                              {label: new Date(2016, 0,1), value: "17.4"}]
                    }/*,
                    {key: "Internet & Telcos",
                     values: [{label: "0", value: "12.3"},
                              {label: "1", value: "14.4"},
                              {label: "2", value: "13.6"},
                              {label: "3", value: "12.3"},
                              {label: "4", value: "12.6"}]
                    },
                    {key: "Shoppings",
                     values: [{label: "0", value: "18.0"},
                              {label: "1", value: "23.1"},
                              {label: "2", value: "22.9"},
                              {label: "3", value: "25.6"},
                              {label: "4", value: "26.3"}]
                    },
                    {key: "Noticias & Medios",
                     values: [{label: "0", value: "16.0"},
                              {label: "1", value: "19.2"},
                              {label: "2", value: "19.3"},
                              {label: "3", value: "19.3"},
                              {label: "4", value: "19.8"}]
                    },
                    {key: "Negocios e industrias",
                     values: [{label: "0", value: "14.3"},
                              {label: "1", value: "13.6"},
                              {label: "2", value: "14.4"},
                              {label: "3", value: "15.1"},
                              {label: "4", value: "15.5"}]
                    },
                    {key: "Computer & Electronic",
                     values: [{label: "0", value: "9.03"},
                              {label: "1", value: "7.83"},
                              {label: "2", value: "8.45"},
                              {label: "3", value: "8.17"},
                              {label: "4", value: "8.34"}]
                    }*/])
            .call(audiencia_industrias_grafico);
        audiencia_industrias_grafico.update;
        return audiencia_industrias_grafico;
    });
};


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


var refresh_function = [];

$(document).ready(function() {
    start_audiencia_interes_b100_tabla();
    start_audiencia_interes_b100_grafico();
    start_audiencia_interes_tabla();
    
    start_audiencia_Arte_Entretenimiento_sites();
    start_audiencia_Arte_Entretenimiento_musimundo_tabla();
    start_audiencia_Arte_Entretenimiento_musimundo_wordcloud();
    start_audiencia_Arte_Entretenimiento_garbarino_tabla();
    start_audiencia_Arte_Entretenimiento_garbarino_wordcloud();
    start_audiencia_Arte_Entretenimiento_fravega_tabla();
    start_audiencia_Arte_Entretenimiento_fravega_wordcloud();
    start_audiencia_Arte_Entretenimiento_avenida_tabla();
    start_audiencia_Arte_Entretenimiento_avenida_wordcloud();
    start_audiencia_Internet_Telcos_sites();
    start_audiencia_Internet_Telcos_musimundo_tabla();
    start_audiencia_Internet_Telcos_musimundo_wordcloud();
    start_audiencia_Internet_Telcos_garbarino_tabla();
    start_audiencia_Internet_Telcos_garbarino_wordcloud();
    start_audiencia_Internet_Telcos_fravega_tabla();
    start_audiencia_Internet_Telcos_fravega_wordcloud();
    start_audiencia_Internet_Telcos_avenida_tabla();
    start_audiencia_Internet_Telcos_avenida_wordcloud();
    start_audiencia_Shoppings_sites();
    start_audiencia_Shoppings_musimundo_tabla();
    start_audiencia_Shoppings_musimundo_wordcloud();
    start_audiencia_Shoppings_garbarino_tabla();
    start_audiencia_Shoppings_garbarino_wordcloud();
    start_audiencia_Shoppings_fravega_tabla();
    start_audiencia_Shoppings_fravega_wordcloud();
    start_audiencia_Shoppings_avenida_tabla();
    start_audiencia_Shoppings_avenida_wordcloud();
    start_audiencia_Noticias_Medios_sites();
    start_audiencia_Noticias_Medios_musimundo_tabla();
    start_audiencia_Noticias_Medios_musimundo_wordcloud();
    start_audiencia_Noticias_Medios_garbarino_tabla();
    start_audiencia_Noticias_Medios_garbarino_wordcloud();
    start_audiencia_Noticias_Medios_fravega_tabla();
    start_audiencia_Noticias_Medios_fravega_wordcloud();
    start_audiencia_Noticias_Medios_avenida_tabla();
    start_audiencia_Noticias_Medios_avenida_wordcloud();
    
    start_audiencia_sitios_ranking_tabla();
    
    start_audiencia_industrias_grafico();
    
    $("#link_tab_audiencia_interes_b100").on("click", function() {
        refresh_function = [];
        refresh_function.push("start_audiencia_interes_b100_grafico");
    });
    $("#link_tab_audiencia_interes").on("click", function() {
        refresh_function = [];
        refresh_function.push("start_audiencia_interes_grafico");
    });
    
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        //alert(e.target); // newly activated tab
        //e.relatedTarget // previous active tab
        var i;
        for (i = 0; i < refresh_function.length; i++) {
            window[refresh_function[i]]();
        };
    });
});
