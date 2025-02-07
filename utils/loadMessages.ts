export async function loadMessages(locale: string) {
    try {
        const messages: Record<string, string> = {};
        const files = [ 'header', 'notFound']; // Burada yüklənəcək faylların adları
        // Hər bir faylı yüklə və obyektə əlavə et
        for (const file of files) {
            const importedModule = await import(`../messages/${locale}/${file}.json`);
            messages[file] = importedModule.default;
        }

        return messages;
    } catch (error) {
        console.error(`Mesaj faylı yüklənə bilmədi: ${locale}`, error);
        return {};
    }
}

