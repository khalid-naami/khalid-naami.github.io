import json

log_path = r"C:\Users\khali\.gemini\antigravity\brain\00fbe5f6-5fbe-40bb-a075-38154c4374e1\.system_generated\logs\transcript.jsonl"

with open(log_path, 'r', encoding='utf-8') as f:
    for i, line in enumerate(f):
        if "download" in line.lower() or "urllib" in line.lower() or "requests" in line.lower() or ".webp" in line.lower():
            try:
                data = json.loads(line)
                # Print only relevant parts to avoid flooding
                print(f"Line {i} - Type: {data.get('type')}, Status: {data.get('status')}")
                if 'tool_calls' in data:
                    for tc in data['tool_calls']:
                        if tc['name'] in ['run_command', 'write_to_file']:
                            print(f"  Tool: {tc['name']}")
                            print(f"  Args: {str(tc.get('args'))[:300]}")
            except Exception as e:
                pass
