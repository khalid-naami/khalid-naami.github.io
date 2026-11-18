import json
import os

log_path = os.environ.get("TRANSCRIPT_LOG_PATH", "transcript.jsonl")

with open(log_path, 'r', encoding='utf-8') as f:
    for i, line in enumerate(f):
        if "curl" in line.lower() or "wget" in line.lower() or "download_image" in line.lower():
            try:
                data = json.loads(line)
                print(f"Line {i} - Type: {data.get('type')}, Status: {data.get('status')}")
                if 'tool_calls' in data:
                    for tc in data['tool_calls']:
                        print(f"  Tool: {tc['name']}")
                        print(f"  Args: {str(tc.get('args'))[:300]}")
            except:
                pass
