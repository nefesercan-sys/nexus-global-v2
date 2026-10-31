import SineklikPanjurSayfasi from '@/components/SineklikPanjurSayfasi';
import { buildMetadata } from '@/lib/metadata';

export const metadata = buildMetadata('tr');

export default function Page() {
  return <SineklikPanjurSayfasi lang="tr" />;
}
