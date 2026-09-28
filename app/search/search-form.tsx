'use client';

import { sendGTMEvent } from '@next/third-parties/google';
import { updateSearch } from './actions';

export default function SearchForm({ defaultTerm, defaultLimit }: { defaultTerm: string, defaultLimit: string }) {
  async function handleSubmit(formData: FormData) {
    const term = formData.get('term') as string;
    const count = formData.get('count') as string;

    // Dispara o evento customizado para o GTM
    sendGTMEvent({
      event: 'shelf_search',
      searchTerm: term,
      searchLimit: count,
    });

    // Executa a Server Action original
    await updateSearch(formData);
  }

  return (
    <form action={handleSubmit} className="flex gap-2">
      <input 
        name="term" 
        defaultValue={defaultTerm} 
        placeholder="Search products..." 
        className="border p-2 rounded-md"
      />
      <input 
        name="count" 
        defaultValue={defaultLimit} 
        type="number" 
        className="border p-2 rounded-md w-20"
      />
      <button 
        type="submit" 
        className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
      >
        Search
      </button>
    </form>
  );
}
