import json

log_path = r"C:\Users\khali\.gemini\antigravity\brain\00fbe5f6-5fbe-40bb-a075-38154c4374e1\.system_generated\logs\transcript.jsonl"

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
