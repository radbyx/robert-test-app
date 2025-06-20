# Jobrådgivnings Portal

Dette projekt er en portal til jobrådgivning, hvor kandidater kan administreres og rådgivere kan hjælpe jobsøgende.  
Portalen er bygget med moderne frontend-teknologier og bruges som testopgave for nye udviklere på teamet.

## Stack

- **Vue 3 (Composition API)**
- **TypeScript**
- **Pinia** (state management)
- **Vite** (build tool)
- **TailwindCSS** (+ TailwindUI komponenter)
- **CapacitorJS** (til mobil apps)

## Struktur

```
src/
  components/      // Vue-komponenter (fx CandidateCard)
  data/            // Statiske data (fx candidatesdata.ts)
  pages/           // Sider (fx Home.vue)
  store/           // Pinia stores (fx candidateStore.ts)
  types/           // TypeScript typer (fx Candidate interface)
  assets/          // CSS (fx tailwind.css)
  main.ts          // App entrypoint
  App.vue          // Root-komponent
```

## Kom godt i gang
Følg disse instruktioner for at få en kopi af projektet op at køre på din lokale maskine til udvikling og test - du kan også lave et fork og bruge codespaces.

### Forudsætninger
Sørg for, at du har følgende installeret:

- **Node.js** (version 22.16.0)
- **npm** (version 9.8.1 eller nyere) **eller** `yarn`

### Installation
1. Gå ind i projektmappen (hvis du ikke allerede er der):
   ```sh
   cd jobraadgivning-portal
   ```

2. Installer dependencies:
   ```sh
   npm install
   ```

3. Start udviklingsserver:
   ```sh
   npm run dev
   ```

4. Åbn [http://localhost:3000](http://localhost:3000) i din browser.

## Mulige Opgaver
Vi har samlet nogle opgaver, som du kan vælge imellem.
Det forventes ikke, at du løser dem alle - vælg i stedet 2-3 opgaver, som du mener bedst viser dine evner.

Du er også meget velkommen til at tænke kreativt og selv forbedre noget i løsningen - fx løfte designet, optimere brugeroplevelsen eller implementere noget smart, du selv ville foreslå i en rigtig arbejdssituation.
### Her er opgaverne:
- **Tilføj søgefunktion:**  
  Gør det muligt at søge i kandidatlisten ud fra navn eller e-mail.

- **Tilføj/rediger/slet kandidat:**  
  Implementér formularer til at oprette, redigere og slette kandidater.

- **Vis detaljeret kandidatprofil:**  
  Vis flere oplysninger om en kandidat på en separat side eller i en modal, når man klikker på kandidaten.

- **Filtrér kandidater:**  
  Tilføj mulighed for at filtrere listen, fx på land eller rådgiver.

- **Mulighed for at booke et møde:**  
  Implementér en funktion til at booke møder med kandidater, fx via en kalenderintegration.

## Mobil-app

Projektet kan også bygges som mobil-app med CapacitorJS til Android og iOS.

## Kontakt

For spørgsmål, kontakt AS3.

## Version
Denne test er sidst opdateret: Juni 2025
