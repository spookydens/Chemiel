import LargeHeading from "@/components/ui/LargeHeading";
import Collapsable from "@/components/ui/Collapsable";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <LargeHeading className="align-center gap-8 p-4 dark:text-blue-200">Edelgase</LargeHeading>
        <div className="w-11/12 max-w-5xl flex justify-center flex-row">
            <video className="w-full rounded-3xl gap-8"
                   poster="/images/Thumbnail.png"
                   src="/video/Edelgaskonfiguration.mp4"
                   controls></video>

        </div>

        <div className="w-11/12 max-w-5xl flex flex-col p-16 justify-between gap-8">

        <Collapsable
            heading="Was sind Edelgase?"
            content="Edelgase sind eine besondere Gruppe von Elementen im Periodensystem. Sie sind wie die VIPs unter den Elementen, weil sie sehr stabil und nicht reaktionsfreudig sind. Das bedeutet, dass sie nicht gerne Verbindungen mit anderen Elementen eingehen."
            globalStyle='rounded'
            globalColor='gray'
            headingColor='blueTransparent'
        />

        <Collapsable
            heading="Welche Edelgase gibt es?"
            content="Einige bekannte Edelgase sind Helium, Neon, Argon, Krypton, Xenon, Radon und das Künstlich und noch nicht zu erforschte Oganesson."
            globalStyle='rounded'
            globalColor='gray'
            headingColor='blueTransparent'
        />

            <Collapsable
                heading="Wo werden die verschiedenen edelgase eingesetzt?"
                content="Du hast vielleicht schon Helium in Ballons gesehen, denn es macht sie schwebend und lustig. Neon wird oft in leuchtenden Schildern verwendet, die in der Nacht bunt leuchten. Argon wird beim Schweißen benutzt, um das Metall zu schützen. Krypton und Xenon haben besondere Anwendungen in der Beleuchtung und in Lasergeräten."
                globalStyle='rounded'
                globalColor='gray'
                headingColor='blueTransparent'
            />

            <Collapsable
                heading="Was machen Edelgase so wichtig?"
                content="Edelgase sind in der Wissenschaft und Technologie wichtig. Sie werden in Labors für Experimente und Analysen verwendet, zum Beispiel in der Gaschromatographie oder Massenspektrometrie. Einige Edelgase wie Helium werden sogar verwendet, um Geräte wie Magnetresonanztomographen zu kühlen. Insgesamt sind Edelgase spezielle Elemente, die aufgrund ihrer Stabilität und verschiedenen Anwendungen in vielen Bereichen eine wichtige Rolle spielen."
                globalStyle='rounded'
                globalColor='gray'
                headingColor='blueTransparent'
            />

        </div>

    </main>
  )
}
