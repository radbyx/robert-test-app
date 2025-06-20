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

## Kom i gang

1. Gå ind i projektmappen (hvis du ikke allerede er der):
   ```sh
   cd jobrradgivning-portal
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

## Opgaver

- **Tilføj søgefunktion:**  
  Gør det muligt at søge i kandidatlisten ud fra navn eller e-mail.

- **Tilføj/rediger/slet kandidat:**  
  Implementér formularer til at oprette, redigere og slette kandidater.

- **Vis detaljeret kandidatprofil:**  
  Når man klikker på en kandidat, skal flere oplysninger vises på en separat side eller i en modal.

- **Filtrér kandidater:**  
  Tilføj mulighed for at filtrere listen på land eller rådgiver.

- **Mulighed for at booke et møde:**  
  Implementér en funktion til at booke møder med kandidater, fx via en kalenderintegration.

## Mobil-app

Projektet kan også bygges som mobil-app med CapacitorJS til Android og iOS.

## Kontakt

For spørgsmål, kontakt teamet eller opret et issue.
