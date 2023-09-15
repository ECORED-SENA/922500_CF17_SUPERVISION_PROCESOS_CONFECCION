<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 3
      h1 Normas aplicadas según prueba o ensayo

    .row.justify-content-center.align-items-start.mb-4 
      .col-lg-5.my-3 
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/9.png', alt='')             
      .col-lg-7.my-3
        p(data-aos="fade-down") Como se ha podido observar en las diferentes normas de las distintas asociaciones, suelen tener puntos de encuentro en cuanto a que responden al mismo objetivo o ensayo a desarrollar, de esta manera es que se logra integrar las ISO, ASTM y AATCC, hay otras asociaciones que también desarrollan normas, pero esta triada es de las más relevantes en la industria textil, a continuación, para poder visionar la integralidad de las mismas se detallan ensayos que utilizan una combinación de normas.  
        .cajon.color-secundario.p-4.mb-4(data-aos="flip-down")
          h4(data-aos="fade-down") Pruebas físicas con los métodos de prueba 
          p(data-aos="fade-down").mb-0 Las normas en su mayoría las que se encargan de evaluar y tipificar los hilados, textiles y tejidos, se les denominan también pruebas físicas, dado que analizan la estructura de un hilo, tela o tejido, es decir, se necesita de un elemento para caracterizar completamente las condiciones que las hace fuertes, resistentes etc.

    h4.t1(data-aos="fade-down") Prueba de peso (masa por unidad de área)
    p(data-aos="fade-down") Es aplicado a cualquier tipo de textil o tejido dado que es un parámetro importante en las condiciones de calidad que debe poseer un textil. El peso se relaciona al costo de una producción lo que en últimas se ve reflejado en el precio o valor de la venta de un textil por metro y ancho. El peso se asocia a su vez con la apariencia de un textil, y este deberá corresponder a lo que se debería según los estándares, por ejemplo, el peso del denim en sus diferentes gramajes o el dril.

    p(data-aos="fade-down").mb-5 Hay aspectos que se tienen en cuenta antes de determinar el peso de un textil, como por ejemplo la humedad que contiene una tela, la humedad retenida de acuerdo con cantidades sumergidas, esto también da un peso el cual se deberá especificar y se dará en valores porcentuales.                      

    .row.justify-content-center.align-items-start.mb-4 
      .col-lg-4.my-3 
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/10.png', alt='')             
      .col-lg-8.my-3
        p(data-aos="fade-down") Humedad relativa es una cierta cantidad de agua presente en una fibra que a su vez integrarán un textil, para ello se dejan aislados con temperatura aproximada a 21° con un 65% de humedad, con un tiempo de 24 horas. Esto permite alcanzar un estado equilibrado a partir del estado en seco de un textil.

        p(data-aos="fade-down") En esta prueba de peso que es similar al anterior solo que en este punto se determinará la unidad de masa, se expresa de dos maneras: 
        .bg5.p-4.mb-4(data-aos="flip-down")
          .row.justify-content-center         
            .col-lg-6.my-3(data-aos="fade-left")
              .bg6.p-3.brad1.h-100        
                .list.mb-0.h-100
                  .list__item
                    .list__item__bulletNumber 
                      span 1
                  .list__txt
                    p.mb-0 Gramo por metro cuadrado. 
            .col-lg-6.my-3(data-aos="fade-right")
              .bg6.p-3.brad1.h-100                           
                .list.mb-0.h-100
                  .list__item
                    .list__item__bulletNumber 
                      span 2
                  .list__txt
                    p.mb-0 Onza por yarda al cuadrado.

        p(data-aos="fade-down") Este método de prueba mide la masa de las telas por una determinada unidad de área (peso), de igual manera también se aplica a todo tipo de textil o tejido con atributos especiales como recubrimientos o resinas, esto permite determinar el desempeño de una tela, suele realizarse de la siguiente manera: 

    .bg7.mb-5
      .row.justify-content-center.text-center.pt-3     
        .col-lg.col-md-6.col-sm-12.my-2(data-aos="fade-left")
          .tarjeta.tarjeta-avatar.h-100
            img.img-w(src='@/assets/curso/temas/12.svg' alt='AvatarTop')
            .tarjeta.bg8.ts.h-100
              .p-4
                p.mb-0 Se selecciona una muestra de un textil. 
        .col-lg.col-md-6.col-sm-12.my-2(data-aos="fade-left")
          .tarjeta.tarjeta-avatar.h-100
            img.img-w(src='@/assets/curso/temas/13.svg' alt='AvatarTop')
            .tarjeta.bg8.ts.h-100
              .p-4
                p.mb-0 Se pesa aplicando la fórmula de más por unidad de área. 
        .col-lg.col-md-6.col-sm-12.my-2(data-aos="fade-left")
          .tarjeta.tarjeta-avatar.h-100
            img.img-w(src='@/assets/curso/temas/14.svg' alt='AvatarTop')
            .tarjeta.bg8.ts.h-100
              .p-4
                p.mb-0 La muestra debe ser de 1 metro como mínimo.
        .col-lg.col-md-6.col-sm-12.my-2(data-aos="fade-left")
          .tarjeta.tarjeta-avatar.h-100
            img.img-w(src='@/assets/curso/temas/15.svg' alt='AvatarTop')
            .tarjeta.bg8.ts.h-100
              .p-4
                p.mb-0 Si la tela viene en rollo esta deberá cortarse al final del desarrollo de una tela. 
        .col-lg.col-md-6.col-sm-12.my-2(data-aos="fade-left")
          .tarjeta.tarjeta-avatar.h-100
            img.img-w(src='@/assets/curso/temas/16.svg' alt='AvatarTop')
            .tarjeta.bg8.ts.h-100
              .p-4
                p.mb-0 El valor obtenido se da porcentualmente y el mínimo aceptado es de 3 % de masa por unidad.

    .row 
      .col.up
        p(data-aos="fade-down").mb-4 Las normas aplicadas que suelen implementarse para determinar el peso en sus dos formas, son:  

    .row.justify-content-center.text-center.mb-4
      .col-lg-4.my-3(data-aos="fade-left")
        .bg3.p-4.brad1.h-100
          img.img-a.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/17.svg', alt='')             
          p.mb-0 ASTM D3776: Masa/superficie unitaria (peso) de la tela
      .col-lg-4.my-3(data-aos="fade-right")
        .bg3.p-4.brad1.h-100
          img.img-a.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/17.svg', alt='')             
          p.mb-0 ISO 3801: Determinación de masa por unidad de longitud y masa por unidad de área en tejidos textiles
      .col-lg-4.my-3(data-aos="fade-left")
        .bg3.p-4.brad1.h-100
          img.img-a.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/17.svg', alt='')             
          p.mb-0 ASTM D1909: Determinación de humedad relativa 

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10
        .tarjeta.color-primario.p-3(data-aos="flip-down")
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/v1.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4(data-aos="fade-down") Norma ASTM D3776
                  p(data-aos="fade-down").mb-0 Amplíe su conocimiento sobre la norma ASTM D3776 y el proceso de aplicación del método.
                .col-sm-auto
                  a.boton.color-primario(:href="obtenerLink('/downloads/ANEXO_6_ASTM_D3776.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
          .dot.my-4 
          
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/v.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4(data-aos="fade-down") Prueba textil de peso
                  p(data-aos="fade-down").mb-0 En el siguiente video se puede observar cómo se realiza una prueba textil de peso
                .col-sm-auto
                  a.boton.color-primario(href="https://www.youtube.com/watch?v=SBPhxqrZPxI" target="_blank")
                    span Ver video
                    i.fab.fa-youtube 

    h4.t1(data-aos="fade-down") Conteo de hilos en las telas
    p(data-aos="fade-down").mb-5 Esta prueba es una de las más implementadas dado que permite obtener datos de hilos y pasadas por urdimbre o por trama, los valores se expresan; hilos y pasadas por cm cuadrado o hilos y pasadas por pulgada al cuadrado, por ejemplo, una expresión bajo este método podría quedar de la siguiente manera:
    
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-8
        .bg9.p-4.text-center(data-aos="flip-down")     
          h5(data-aos="fade-down").mb-0 Textil de 39x26: traduce que en hilo de urdimbre tiene 39 y en hilos de trama 26 cm, esto significa que una muestra posee 99 hilos por pulgada en la urdimbre y en trama 26 pasadas por pulgadas.
    p(data-aos="fade-down").mb-5 Existen dos tipos de conteo de hilos en telas; en tejidos de punto y tejidos planos y para ambos se aplican normas diferentes.
    .row.justify-content-start.mb-3     
      .col-auto.bg12.p-0.pe-4(data-aos="flip-down")
        .list.mb-1
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/v3.svg', alt='')
          .list__txt_1
            h4.mb-0 A. Conteo de hilos en tejido plano      
    p(data-aos="fade-down") Una tela de tejido plano posee la característica de que está compuesta por hilos de urdimbre y trama, es decir, se necesitan dos hilos en diferentes direcciones de urdimbre y trama para la estructura de un textil con tejido plano.

    p(data-aos="fade-down").mb-5 Para recordar:
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-8
        .bg5.p-4.mb-4(data-aos="flip-down")
          .row.justify-content-center         
            .col-lg-6.my-3(data-aos="fade-left")
              .bg6.p-3.brad1.h-100.j        
                h5.mb-0 Urdimbre: se denominan hilos verticales.
            .col-lg-6.my-3(data-aos="fade-right")
              .bg6.p-3.brad1.h-100.j                           
                h5.mb-0 Trama: son los hilos horizontales, pero se denominan pasadas.

    p(data-aos="fade-down").mb-5 Se expresarán hilos por pasadas o pasadas por hilo. 
    .row.justify-content-center.align-items-center.mb-5         
      .col-lg-8
        .bg10.p-4
          .titulo-sexto.color-acento-contenido.up
            h5 Figura 2.
            span Trama y urdimbre 
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/18.png', alt='La imagen presenta cómo se realiza la tranma y la urdimbre.')
          figcaption Nota. Tomada de https://bit.ly/3sivFRH 

    p(data-aos="fade-down").mb-5 El método consiste en el conteo de los hilos y las pasadas acordes a una medida determinada, la cual podrá ser de un centímetro por pulgada. La suma total de los hilos y la suma total de pasadas tendrá la denominación de “suma de conjunto” expresado OAS por sus siglas en inglés (overa ll set). Este método de conteo es implementado por dispositivos que permiten el aumento y equipos cuentahílos, lo que permitiría a su vez desintegrar gradualmente una muestra durante su conteo. Los equipos varían de acuerdo con los tejidos que tienen dobles pasadas o dobles hilos, pero en estructura suelen ser muy similares, los equipos para esta prueba son:

    .bg7.mb-5
      .row.justify-content-center.text-center.pt-3     
        .col-lg.col-md-6.col-sm-12.my-2(data-aos="fade-left")
          .tarjeta.tarjeta-avatar.h-100
            img.img-w(src='@/assets/curso/temas/19.svg' alt='AvatarTop')
            .tarjeta.bg8.ts.h-100
              .p-4
                p.mb-0 Lupa con vidrio de aumento con base de centímetro cuadrado o pulgada al cuadrado.
        .col-lg.col-md-6.col-sm-12.my-2(data-aos="fade-left")
          .tarjeta.tarjeta-avatar.h-100
            img.img-w(src='@/assets/curso/temas/20.svg' alt='AvatarTop')
            .tarjeta.bg8.ts.h-100
              .p-4
                p.mb-0 Agujas largas.
        .col-lg.col-md-6.col-sm-12.my-2(data-aos="fade-left")
          .tarjeta.tarjeta-avatar.h-100
            img.img-w(src='@/assets/curso/temas/21.svg' alt='AvatarTop')
            .tarjeta.bg8.ts.h-100
              .p-4
                p.mb-0 Equipo de cuenta hilos.
        .col-lg.col-md-6.col-sm-12.my-2(data-aos="fade-left")
          .tarjeta.tarjeta-avatar.h-100
            img.img-w(src='@/assets/curso/temas/22.svg' alt='AvatarTop')
            .tarjeta.bg8.ts.h-100
              .p-4
                p.mb-0 Tijeras.
        .col-lg.col-md-6.col-sm-12.my-2(data-aos="fade-left")
          .tarjeta.tarjeta-avatar.h-100
            img.img-w(src='@/assets/curso/temas/23.svg' alt='AvatarTop')
            .tarjeta.bg8.ts.h-100
              .p-4
                p.mb-0 Báscula electrónica.  

    p(data-aos="fade-down").mb-4 Las normas que son empleadas en esta prueba son:

    .row.justify-content-center.text-center.mb-4
      .col-lg-6.my-3(data-aos="fade-left")
        .bg3.p-4.brad1.h-100
          img.img-a.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/17.svg', alt='')             
          h5.mb-0 ASTM D3775: Método de ensayo para el conteo de la urdimbre (cabos) y el hilo (relleno) de telas tejidas.
      .col-lg-6.my-3(data-aos="fade-right")
        .bg3.p-4.brad1.h-100
          img.img-a.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/17.svg', alt='')             
          h5.mb-0 ISO 7211/2: Métodos de análisis para la determinación del número de hilos por unidad de longitud en tejidos textiles.


    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10
        .tarjeta.color-primario.p-3(data-aos="flip-down")
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/v1.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4(data-aos="fade-down") Norma ASTM D3775
                  p(data-aos="fade-down").mb-0 Amplíe su conocimiento sobre la norma ASTM D3775 y el proceso de aplicación del método.
                .col-sm-auto
                  a.boton.color-primario(:href="obtenerLink('/downloads/ANEXO_7_ASTM_D3775.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
          .dot.my-4 
          
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/v.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4(data-aos="fade-down") Prueba de densidad en conteo de hilos
                  p(data-aos="fade-down").mb-0 En el siguiente video se puede observar cómo se realiza la prueba textil de rasgado
                .col-sm-auto
                  a.boton.color-primario(href="https://www.youtube.com/watch?v=V4foegGuyO8" target="_blank")
                    span Ver video
                    i.fab.fa-youtube 

    .row.justify-content-start.mb-3     
      .col-auto.bg12.p-0.pe-4(data-aos="flip-down")
        .list.mb-1
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/v3.svg', alt='')
          .list__txt_1
            h4.mb-0 B. Conteo de hilos en telas de tejido de punto    
    p(data-aos="fade-down") Las telas de tejido de punto se construyen a partir de un solo hilo que continuamente con diferentes entrelazados y direcciones materializan dicha construcción, por ello esta prueba suele ser un poco más cuidadosa, pues pueden encontrarse en un tejido los llamados bucles, lo que significa que no siempre tendrá una forma continua, pero estos bucles serán vistos como los hilos de urdimbre en un tejido plano. En el conteo de los hilos es importante tener en cuenta la máquina tejedora, hilos y estructura final del tejido en cuanto a la proximidad de los hilos, pues dependiendo de esto la apariencia de una tela puede variar, se implementan los mismos elementos del análisis anterior y los equipos de cuenta hilos se ajustarán dependiendo del tipo de bucles generados en un tejido.

    p(data-aos="fade-down").mb-5 La norma empleada en esta prueba es: ASTM 3887 Especificación estándar de tolerancias para tejidos de punto.

    h4.t1(data-aos="fade-down") Ancho de tela
    p(data-aos="fade-down") Esta prueba determina el ancho de una tela de cualquier tipo de tejido, el método consiste en ubicar una muestra en estado relajado y orientación natural sobre una mesa o superficie plana tomando la medida que dé al ancho, la muestra es tomada directamente de un lote de rollo de tela. La medida se determina incluyendo los orillos los cuales suelen venir marcadas de 1cm o 2cm.

    p(data-aos="fade-down").mb-5 Las normas implementadas para esta prueba son:

    .row.justify-content-center.text-center.mb-4
      .col-lg-6.my-3(data-aos="fade-left")
        .bg3.p-4.brad1.h-100
          img.img-a.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/17.svg', alt='')             
          h5.mb-0 ASTM D3774: Método de prueba estándar para el ancho de la tela
      .col-lg-6.my-3(data-aos="fade-right")
        .bg3.p-4.brad1.h-100
          img.img-a.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/17.svg', alt='')             
          h5.mb-0 ISO 3992: Medida de ancho de piezas de tejidos textiles


    .row.justify-content-center.align-items-center        
      .col-lg-10
        .tarjeta.color-primario.p-3(data-aos="flip-down")
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/v1.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4(data-aos="fade-down") Pruebas de solidez del color
                  p(data-aos="fade-down").mb-0 A continuación, se describen las principales pruebas utilizadas en la industria para determinar la solidez del color en las telas.
                .col-sm-auto
                  a.boton.color-primario(:href="obtenerLink('/downloads/Anexo_Pruebas_de_solidez_del_color.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download 
                       
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
