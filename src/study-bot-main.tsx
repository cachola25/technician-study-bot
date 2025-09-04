// Main function that will handle prompts to the
// chat bot
export default function StudyBotMain() {
  return (
    <div className="border rounded-xl bg-gray-100 flex flex-col">
      <header className="border rounded-xl border-b p-4 font-semibold bg-blue-200">
        Technician Study Bot
      </header>

      <main className="border rounded-xl flex items-center justify-center p-6 bg-green-200">
        <div className="border rounded-xl p-20 text-neutral-400">
          Chat area
        </div>
      </main>
      
    </div>
    
  );
}
