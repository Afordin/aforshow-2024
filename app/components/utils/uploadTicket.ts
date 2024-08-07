import { apiClient } from "@/utils/supabase/client";
import { toBlob } from 'html-to-image';


export const uploadTicket = async (userId: string, element: HTMLDivElement): Promise<void> => {

  try {
    const img = await toBlob(element);
    if (!img) {
      throw new Error('Could not create image');
    }

    const { data, error } = await apiClient.storage.from('aforshow').upload(`public/${userId}.png`, img, {
      cacheControl: '3600',
      upsert: true
    });

    if (error && error['statusCode'] != '403') {
      throw new Error(error.message);
    }
    if (!data) return;

  } catch (e) {
    console.error('Could not upload image:', e);
  }
};
