'use client';

import { sendGTMEvent } from '@next/third-parties/google';
import { updateSearch } from './actions';
import { SearchInput } from '@/components/molecules/SearchInput';
import { Button } from '@/components/atoms/Button';
import { useState } from 'react';

export default function SearchForm({
  defaultTerm,
  defaultLimit,
}: {
  defaultTerm: string;
  defaultLimit: string;
}) {
  const [term, setTerm] = useState(defaultTerm);
  const [limit, setLimit] = useState(defaultLimit);

  async function handleSubmit() {
    // Dispara o evento customizado para o GTM
    sendGTMEvent({
      event: 'shelf_search',
      searchTerm: term,
      searchLimit: limit,
    });

    // Cria o FormData para a Server Action
    const formData = new FormData();
    formData.append('term', term);
    formData.append('count', limit);
    
    await updateSearch(formData);
  }

  return (
    <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }} className="flex gap-2">
      <SearchInput 
        value={term} 
        onChange={setTerm} 
        onSearch={handleSubmit}
        placeholder="Search products..."
        buttonText="Search"
      />
      <div className="flex items-center gap-2">
        <span className="text-xs text-slate-500">Limit:</span>
        <input
          name="count"
          value={limit}
          onChange={(e) => setLimit(e.target.value)}
          type="number"
          className="border p-2 rounded-md w-20 text-sm"
        />
      </div>
    </form>
  );
}
