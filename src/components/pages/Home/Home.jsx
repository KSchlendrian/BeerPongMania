import CountdownTimer from "./Countdown/CountdownTimer";
import DateTimeDisplay from "./Countdown/DateTimeDisplay";
import style from "./Home.module.scss";
import React from "react";

const Home = () => {
  const startTime = new Date();

  const dateBpmx = 3 * 24 * 60 * 60 * 1000;
  const dateNow = new Date().getTime();
  const dateTimeAfterThreeDays = dateBpmx + dateNow;

  return (
    <section className={style.home}>
      <h1>Home</h1>
      <section className={style.home_countdown}>
        <CountdownTimer targetDate={dateTimeAfterThreeDays} />
      </section>
      <section className={style.home_text}>
        <p>
          Glück auf liebe BeerPongManiacs, <br />
          <br /> Beerpong wurde bei uns schon lange auf fast allen Partys
          gespielt. Schnell wurde ne Tür ausgebaut und als Spielunterlage
          zweckentfremdet. Es ging sogar soweit, dass man Laminat auf zwei
          Campingtischen verlegte, um auch unterwegs eine spielbare Unterlage
          dabei zu haben. Da in uns allen das Wettkampfgen steckt, wollten wir
          uns irgendwann mit anderen Teams messen und zeigen wie gut man die
          roten Cups abräumen kann. Man hörte sich um und siehe da immer am
          Pfingstsonntag findet im Druckluft in Oberhausen seit einigen Jahren
          ein Beerpongturnier statt. Fluchs ne Anfrage rausgejagt, ob man sich
          denn dort auch mal beweisen dürfte. Die Vorfreude wich schnell der
          Ernüchterung, denn das Turnier ist seit Jahren ausverkauft (40 Teams)
          und diese haben ein Vorrecht auf den Startplatz. Ähnlich wie mit den
          Dauerkarten bei großen Fußballvereinen werden diese beinahe vererbt.
          Mist! <br />
          <br />
          Nun wurde aber unser Ehrgeiz gepackt:
          <br />
          <br />
          „Was die können, können wir schon lange.“ „Wenn die uns nicht
          mitspielen lassen wollen, dann veranstalten wir halt selber ein
          (besseres) Turnier.“
          <br />
          <br /> Gesagt, getan. Das war die Geburtsstunde der BeerPongMania.
          Vielleicht fragt ihr Euch, wie wir auf den Namen kamen? Nunja, den
          beiden Organisatoren kann man ein Faible für den Wrestlingsport nicht
          absprechen. Und da die Idee um Ostern 2017 reifte während dort die
          größte Wrestlingveranstaltung der Welt in den USA stattfand, war die
          BeerPongMania nach zwei, drei kleinen Kaltgetränken geboren. Man
          stürzte sich in die Planungen, organisierte einen Raum, überzeugte
          Freunde und Familie daran teilzunehmen und am 26.08.2017 sollte es
          dann soweit sein und die erste Ausgabe der BeerPongMania ging über die
          Bühne. Seitdem wachsen wir Dank Euch stetig und kommen auf immer
          wildere und abgefahrenere Ideen. Es macht uns einfach Bock mit Euch
          zusammen die BeerPongMania lebendig und innovativ zu halten. Gut Pong
          \m/
        </p>
      </section>
    </section>
  );
};

export default Home;
