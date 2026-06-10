import { useEffect, useState } from 'react';
import { SAMPLE_CHANNELS } from '../utils/sampleChannels';
import axios from 'axios';

export function useChannels() {
  const [channels, setChannels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        // Replace with real API call if available
        // const res = await axios.get('/api/channels');
        // setChannels(res.data);
        setChannels(SAMPLE_CHANNELS);
      } catch (e) {
        setChannels(SAMPLE_CHANNELS);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return { channels, loading };
}
