// 'use client';

// import { LucideArrowRight } from 'lucide-react';
// import { useRouter } from 'next/navigation';
// import React from 'react';

// import { useBookQuoteCtx } from '@/context/book-quote';

// import { Button } from '../ui/button';
// import { FormInputWrapper } from '../ui/form-input';
// import MapAutocompleteInput from '../ui/map-autocomplete-input';

// export default function SelectLocationForm() {
//   const { state, setState } = useBookQuoteCtx();

//   const { push } = useRouter();

//   const handleClick = () => {
//     push(`/book-quote/additional-information`);
//   };

//   return (
//     <div>
//       <form className="space-y-12">
//         <div className="space-y-6">
//           <FormInputWrapper name="pickup_location" label="Pickup location">
//             <MapAutocompleteInput
//               onChange={(location) =>
//                 setState({
//                   ...state,
//                   pickup_address: location.location,
//                   pickup_post_code: location.postal_code,
//                   pickup_post_code_relevant_address: location.name,
//                 })
//               }
//             />
//           </FormInputWrapper>
//           <FormInputWrapper name="drop_location" label="Drop location">
//             <MapAutocompleteInput
//               onChange={(location) =>
//                 setState({
//                   ...state,
//                   drop_address: location.location,
//                   drop_post_code: location.postal_code,
//                   drop_post_code_relevant_address: location.name,
//                 })
//               }
//             />
//           </FormInputWrapper>
//         </div>
//         <Button
//           variant="success"
//           size="xl"
//           className="w-full space-x-6"
//           type="button"
//           onClick={handleClick}
//         >
//           <span>Additional information</span>
//           <LucideArrowRight />
//         </Button>
//       </form>
//     </div>
//   );
// }

'use client';

import { LucideArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';

import { useBookQuoteCtx } from '@/context/book-quote';

import { Button } from '../ui/button';
import { FormInputWrapper } from '../ui/form-input';

export default function SelectLocationForm() {
  const { state, setState } = useBookQuoteCtx();
  const { push } = useRouter();

  const handleClick = () => {
    push(`/book-quote/additional-information`);
  };

  return (
    <div>
      <form className="space-y-12">
        <div className="space-y-6">
          <FormInputWrapper name="pickup_location" label="Pickup location">
            <input
              type="text"
              placeholder="Eg: 123 Main St, Hobart TAS 7000"
              className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20"
              onChange={(e) =>
                setState({
                  ...state,
                  pickup_address: e.target.value,
                  pickup_post_code: undefined,
                  pickup_post_code_relevant_address: e.target.value,
                })
              }
            />
          </FormInputWrapper>

          <FormInputWrapper name="drop_location" label="Drop location">
            <input
              type="text"
              placeholder="Eg: 456 George St, Sydney NSW 2000"
              className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/20"
              onChange={(e) =>
                setState({
                  ...state,
                  drop_address: e.target.value,
                  drop_post_code: undefined,
                  drop_post_code_relevant_address: e.target.value,
                })
              }
            />
          </FormInputWrapper>
        </div>

        <Button
          variant="success"
          size="xl"
          className="w-full space-x-6"
          type="button"
          onClick={handleClick}
        >
          <span>Additional information</span>
          <LucideArrowRight />
        </Button>
      </form>
    </div>
  );
}
