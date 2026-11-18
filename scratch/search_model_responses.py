import json
import os

log_path = os.environ.get("TRANSCRIPT_LOG_PATH", "transcript.jsonl")
out_path = os.environ.get("SEARCH_RESULTS_OUT_PATH", "model_search_results.txt")

matches = []
with open(log_path, 'r', encoding='utf-8') as f:
    for idx, line in enumerate(f):
        try:
            data = json.loads(line)
            # check if content or tool calls have IMEC or Bagram or Belt
            content = str(data)
            if "IMEC" in content or "Bagram" in content or "Belt" in content or "economic corridor" in content.lower():
                matches.append((idx, data.get('source'), data.get('type'), data.get('content', '')[:1000]))
        except Exception as e:
            pass

with open(out_path, 'w', encoding='utf-8') as f_out:
    f_out.write(f"Found {len(matches)} matches in log.\n")
    for idx, source, mtype, snippet in matches:
        f_out.write(f"Line {idx} - Source: {source} - Type: {mtype}\n")
        f_out.write(snippet + "\n")
        f_out.write("="*80 + "\n")

print(f"Results written to {out_path}")
